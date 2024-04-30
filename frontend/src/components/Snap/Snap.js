import React, { useState, useRef, useEffect } from 'react';
import './snap.css';


const Snap = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null); // Ref for file input element
  const [response, setResponse] = useState('');
  const startVideoStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };

  const stopVideoStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const handleCaptureImage = () => {
    if (videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageUrl = canvas.toDataURL('image/jpg');
      setImageSrc(imageUrl);
    }
  };

  const handleStartCapture = () => {
    setIsCapturing(true);
    startVideoStream();
  };

  const handleStopCapture = () => {
    setIsCapturing(false);
  };

  const handleSaveImage = async () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'snapshot';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (imageSrc) {
      try {
        // Convert data URL to Blob
        const blob = await (await fetch(imageSrc)).blob();

        const formData = new FormData();
        formData.append('image', blob, 'snapshot');
        console.log(formData);
        console.log(blob)
        const response = await fetch('http://127.0.0.1:5000/', {
          method: 'POST',
          body: formData
          // mode: 'no-cors'
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Response from server:', data);
          const resultString = data.Result; // Access the "Result" key

          setResponse(resultString);
          console.log(resultString)
          // setResponse(JSON.stringify(data1))

          // setImageSrc(null);
        } else {
          console.error('Failed to send image to the backend');
        }
      } catch (error) {
        console.error('Error occurred while sending image to the backend:', error);
      }
    } else {
      console.error('No image to send');
    }
  };


  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageSrc(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!isCapturing) {
      stopVideoStream();
    }
    return () => stopVideoStream(); // Cleanup on component unmount
  }, [isCapturing]);

  return (
    <div className="snapPageContainer">
      <div className="instructions">
        <h1>How to use?</h1>
        <ul>
          <li>Step 1: Take a picture of your food with your camera or choose an image file.</li>
          <li>Step 2: Just press the "Get Calories" button to analyze the image and get calorie information.</li>
        </ul>
      </div>
      <div>
        <p >{response}</p>
        {imageSrc && (
          <div className="snapPageImageContainer">

            <img src={imageSrc} alt="Captured Image" className="snapPageImage" style={{ height: '30vh' }} />
            <button onClick={handleSaveImage} className="snapPageButton">Get Calories</button>
          </div>
        )}
      </div>
      <input
        type="file"
        id="image"
        name='image'
        onChange={handleFileInputChange}
        ref={fileInputRef} // Assigning ref to file input element
        style={{ display: isCapturing ? 'none' : 'block', fontFamily: '"Tilt Neon", "sans-serif"' }} // Display only when not capturing
      />

      <video ref={videoRef} className="snapPageVideo" style={{ display: isCapturing ? 'block' : 'none' }}></video>
      <canvas ref={canvasRef} className="snapPageCanvas" style={{ display: isCapturing ? 'none' : 'block' }}></canvas>

      <button onClick={isCapturing ? handleCaptureImage : handleStartCapture} className="snapPageButton">
        {isCapturing ? 'Take Snapshot' : 'Start Capture'}
      </button>
      {isCapturing && <button onClick={handleStopCapture} className="snapPageButton">Stop Capture</button>}


    </div>


  );
};

export default Snap;



import React from 'react'
import { useNavigate } from 'react-router-dom';


function Fitex() {

    const navigate = useNavigate();
    const handelFitexStartButton = ()=> {
      navigate('/dob');  
    };
    

  return (
    <div className='Fitex'>
        <h1>Fitex Page</h1>
        <div className='FitexStart'>
        <button onClick={handelFitexStartButton}>Start</button>
        </div>
    </div>
  )
}

export default Fitex
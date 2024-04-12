import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './height.css';

const Height = ({ updateUserData }) => {
  const [selectedHeight, setSelectedHeight] = useState('Select Height');
  const [feet, setFeet] = useState('1');
  const [inches, setInches] = useState('0');
  const [textColor, setTextColor] = useState('var(--primary-color)');
  const navigate = useNavigate();

  const feetOptions = Array.from({ length: 8 }, (_, index) => (index + 1).toString());
  const inchesOptions = Array.from({ length: 12 }, (_, index) => index.toString());

  const handleFeetChange = (e) => {
    setFeet(e.target.value);
    setSelectedHeight(`Height: ${e.target.value} feet ${inches} inches`);
    setTextColor('var(--secondary-color)');
  };

  const handleInchesChange = (e) => {
    setInches(e.target.value);
    setSelectedHeight(`Height: ${feet} feet ${e.target.value} inches`);
    setTextColor('var(--secondary-color)');
  };

  const handleHeightNextClick = () => {
    const defaultHeight = 0;
    const currentHeightFeet = feet;
    const currentHeightInches = inches;

    if (currentHeightFeet !== defaultHeight) {
      updateUserData({ heightFeet: currentHeightFeet,heightInches:currentHeightInches });
      navigate('/weight');
    } else {
      alert('Please enter a valid height.');
    }
  };

  return (
    <div className='Height'>
      <div className='Height-icon'></div>
      <h1 style={{ color: textColor }}>{selectedHeight}</h1>
      <div className='HeightSelect'>
        <div className='HeightFeets'>
          <label>Feet:</label>
          <select value={feet} onChange={handleFeetChange} required>
            {feetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className='HeigthInches'>
          <label>Inches:</label>
          <select value={inches} onChange={handleInchesChange} required>
            {inchesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='HeightNext'>
        <button onClick={handleHeightNextClick}><img/></button>
      </div>
    </div>
  );
};

export default Height;

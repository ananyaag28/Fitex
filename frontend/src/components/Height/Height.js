import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './height.css';

const Height = ({ setUserData }) => {
  const [selectedHeight, setSelectedHeight] = useState('Select Height');
  const [feet, setFeet] = useState('1');
  const [inches, setInches] = useState('0');
  const [textColor, setTextColor] = useState('var(--primary-color)');
  

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

  useEffect(()=>{
    setUserData((prev) => ({
      ...prev, modelData: {
        ...prev.modelData,
        height: `${feet}'${inches}`
      }
    }))
  },[feet, inches])

  return (
    <div className='Height'>
      <div className='Height-icon'></div>
      <h1 style={{ color: textColor }}>{selectedHeight}</h1>
      <div className='HeightSelect'>
        <div className='HeightFeets'>
          <label>Feet:</label>
          <select className='border rounded-lg px-2' value={feet} onChange={handleFeetChange} required>
            {feetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className='HeigthInches'>
          <label>Inches:</label>
          <select className='border rounded-lg px-2' value={inches} onChange={handleInchesChange} required>
            {inchesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Height;

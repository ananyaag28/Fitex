import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './gender.css';

function Gender({ setUserData }) {
  const [selectedGender, setSelectedGender] = useState('Select Your Gender');
  const [selectedGenderMale, setSelectedGenderMale] = useState('/Icons/male-icon.png');
  const [selectedGenderFemale, setSelectedGenderFemale] = useState('/Icons/female-icon.png');
  const [textColor, setTextColor] = useState('var(--primary-color)');
  const navigate = useNavigate();

  const GenderMaleButtonClicked = (e) => {
    e.preventDefault()
    console.log('Selected Gender:', selectedGender);
    setUserData((prev) => ({
      ...prev, modelData: {
        ...prev.modelData,
        gender: 'Male'
      }
    }))
    setSelectedGender('Male');
    setTextColor('var(--secondary-color)');
    setSelectedGenderMale('/Icons/male-icon-hover.png');
    setSelectedGenderFemale('/Icons/female-icon.png');
  };
  
  const GenderFemaleButtonClicked = (e) => {
    e.preventDefault()
    console.log('Selected Gender:', selectedGender);
    setUserData((prev) => ({
      ...prev, modelData: {
        ...prev.modelData,
        gender: 'Female'
      }
    }))
    setSelectedGender('Female');
    setTextColor('var(--secondary-color)');
    setSelectedGenderFemale('/Icons/female-icon-hover.png');
    setSelectedGenderMale('/Icons/male-icon.png');
  };



  return (
    <div className='Gender'>
      <div className='GenderText' style={{ color: textColor }}><h1>{selectedGender}</h1></div>
      <div className='GenderSelect'>
        <div className='GenderMale'>
          <button onClick={GenderMaleButtonClicked}>
            <img src={process.env.PUBLIC_URL + selectedGenderMale} alt="Male icon" />
          </button>
        </div>
        <div className='GenderFemale'>
          <button onClick={GenderFemaleButtonClicked}>
            <img src={process.env.PUBLIC_URL + selectedGenderFemale} alt="Female icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gender;

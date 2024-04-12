import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './weight.css';

const Weight = (props) => {
  const [selectedWeight, setSelectedWeight] = useState('');
  const [weightText, setWeightText] = useState('Select Weight');
  const [textColor, setTextColor] = useState('var(--primary-color)');
  const navigate = useNavigate();

  var bmi = 0;
  let bmiStage = '';
  const calculateBMI = () => {
    const { heightFeet, heightInches } = props.userData;
    const currentWeight = parseFloat(selectedWeight);
    if (currentWeight!=0) {
      const heightInMeters = ((parseFloat(heightFeet) * 12 + parseFloat(heightInches))*0.0254).toFixed(1);
      bmi = parseFloat(currentWeight / ((heightInMeters) * (heightInMeters))).toFixed(1);
      
      console.log(heightInMeters,bmi);
      if (bmi < 18.5) bmiStage = 'Underweight';
      else if (bmi >= 18.5 && bmi <= 24.9) bmiStage = 'Normal';
      else if (bmi >= 25 && bmi <= 29.9) bmiStage = 'Pre-obesity';
      else if (bmi >= 30 && bmi <= 34.9) bmiStage = 'Obesity Class 1';
      else if (bmi >= 35 && bmi <= 39.9) bmiStage = 'Obesity Class 2';
      else bmiStage = 'Obesity Class 3';

    }
  };

  const handleWeightChange = (event) => {
    setSelectedWeight(event.target.value);
    setWeightText(`Weight: ${event.target.value} kg`);
    setTextColor('var(--secondary-color)');
  };

  const handleWeightNextClick = () => {
    if (selectedWeight.trim() !== '') {
      calculateBMI();
      props.updateUserData({ currentBmi: bmi, currentBmiStage: bmiStage ,currentWeight: selectedWeight });
      navigate('/homepage');
    } else {
      alert('Please enter a valid weight.');
    }
  };

  return (
    <div className='Weight'>
      <div className='Weight-icon'></div>
      <h1 style={{ color: textColor }}>{weightText}</h1>
      <div className='WeightInput'>
        <label>Weight: </label>
        <input
          type='text'
          id='weightInput'
          value={selectedWeight}
          onChange={handleWeightChange}
          required
        />
        <label> kg</label>
      </div>
      <div className='WeightNext'>
      <button onClick={handleWeightNextClick}><img/></button>
      </div>
    </div>
  );
};

export default Weight;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './weight.css';

const Weight = ({userData, setUserData}) => {
  const [selectedWeight, setSelectedWeight] = useState('');
  const [weightText, setWeightText] = useState('Select Weight');
  const [textColor, setTextColor] = useState('var(--primary-color)');
  const navigate = useNavigate();

  var bmi = 0;
  let bmiStage = '';

  const calculateBMI = () => {
    const { height, weight }  = userData.modelData;
    console.log(height)
    console.log(weight)
    const heightFeet = height[0]
    const heightInches = height[2]
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
    calculateBMI();
    setUserData((prev) => ({
      ...prev, modelData: {
        ...prev.modelData,
        weight: event.target.value,
        currentBmi: bmi, 
        currentBmiStage: bmiStage
      }
    }))
    setWeightText(`Weight: ${event.target.value} kg`);
    setTextColor('var(--secondary-color)');
  };

 

  return (
    <div className='Weight'>
      <div className='Weight-icon'></div>
      <h1 style={{ color: textColor }}>{weightText}</h1>
      <div className='WeightInput !mt-4'>
        <label>Weight: </label>
        <input
          className='border rounded-lg !px-2 me-2'
          type='text'
          id='weightInput'
          value={selectedWeight}
          onChange={handleWeightChange}
          required
        />
        <label> kg</label>
      </div>

    </div>
  );
};

export default Weight;

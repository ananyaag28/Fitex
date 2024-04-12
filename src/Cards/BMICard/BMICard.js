import React, { useEffect, useState } from 'react';
import './bmiCard.css';
import { useNavigate } from 'react-router-dom';

function BMICard(props) {
  const { userData, updateUserData } = props;
  const { currentBmi,currentBmiStage } = userData;

  
  const bmiBarStyle = { width: `${currentBmi}%` };
  const pointerLeftPosition = calculatePointerPosition(currentBmiStage);

  const navigate = useNavigate();

  const handleBmipageCardClick = () => {};

  function calculatePointerPosition(stage) {
    switch (stage) {
      case 'Underweight':
        return { pointerLeftPosition: '0%', zIndex: 2 };
      case 'Normal':
        return { pointerLeftPosition: '25%', zIndex: 2 };
      case 'Pre-obesity':
        return { pointerLeftPosition: '50%', zIndex: 2 };
      case 'Obesity Class 1':
        return { pointerLeftPosition: '75%', zIndex: 2 };
      case 'Obesity Class 2':
        return { pointerLeftPosition: '100%', zIndex: 2 };
      case 'Obesity Class 3':
        return { pointerLeftPosition: '100%', zIndex: 2 };
      default:
        return { pointerLeftPosition: '0%', zIndex: 2 };
    }
  }

  return (
    <div className='BMICard' onClick={handleBmipageCardClick}>
      <div className='BMICardTop'>
        <h2 className='BMICardTopH2'>
          <img className='BMICardTopLeftImg' alt='' />
          BMI
        </h2>
      </div>

      <div className='BMICardMiddle'>
        <div className='BMI-bar' style={bmiBarStyle}></div>
        <div className='BMI-pointer' style={pointerLeftPosition}></div>
      </div>

      <div className='BMICardLast'>
        <div className='BMICardLastCurrent'>
          <h3 className='BMICardLastH3CurrentText'>Current:</h3>
          <h4 className='BMICardLastH4Current'>{currentBmi} </h4>
        </div>
        <div className='BMICardLastGoal'>
          <h3 className='BMICardLastH3GoalText'>BMI Level:</h3>
          <h4 className='BMICardLastH4Goal'>{currentBmiStage} </h4>
        </div>
      </div>
    </div>
  );
}

export default BMICard;

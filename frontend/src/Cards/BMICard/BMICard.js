import React, { useEffect, useState } from 'react';
import './bmiCard.css';
import { Link } from 'react-router-dom';

function BMICard(props) {
  const { userData, updateUserData } = props;
  const { currentBmi,currentBmiStage } = userData;

  
  const bmiBarStyle = { width: `${currentBmi}%` };
  const pointerLeftPosition = calculatePointerPosition(currentBmiStage);


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
    <Link to={"/waterpage"} className='bg-white rounded-lg w-[80%] mx-auto p-4 flex flex-col gap-3'>


    <div className='flex justify-between'>
      <div className='flex items-end gap-2  text-2xl'>
        <img className="w-14 border border-gray-700 rounded-full p-2" src={process.env.PUBLIC_URL + "/Icons/bmi-icon.png"} />
        <p> BMI</p>
      </div>
    </div>


    {/* <div className='bg-[#d3d3d3] h-1.5 w-[80%] rounded mx-auto mt-3'>
      <motion.div
        className={`bar bg-gradient-to-r from-green-300 to-blue-400`}
        initial={{ width: 0 }}
        animate={{ width: `${waterPercentage}%` }}
        transition={{ duration: 1 + (currentWater / waterGoal) }}>
      </motion.div>
    </div> */}

    <div className='flex justify-between gap-2 mx-[10%]'>
      <p>Current: {currentBmi} </p>
      <p>BMI Level: {currentBmiStage}</p>
    </div>

</Link>
    
  );
}

export default BMICard;

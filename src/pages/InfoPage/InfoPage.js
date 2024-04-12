import React, { Component } from 'react';
export default function InfoPage(props){
  console.log(props);
  const heightFeet = props.userData.heightFeet;
  const heightInches = props.userData.heightInches;
  const currentWeight = props.userData.currentWeight;
  const currentBmi = props.userData.currentBmi;
  const currentBmiStage = props.userData.currentBmiStage;


    return (
      <div className='InfoPage'>
        <h1>InfoPage</h1>
        <p>Date of Birth: {props.userData && props.userData.dob ? new Date(props.userData.dob).toLocaleDateString() : 'N/A'}</p>
        <p>Gender: {props.userData && props.userData.gender}</p>
        <p>Height: {heightFeet} Feet  {heightInches} inches</p>
        <p>Weight: {currentWeight}</p>
        <p>BMI: {currentBmi}</p>
        <p>BMI stage: {currentBmiStage}</p>
        <button >Reset Data</button>
      </div>
    )
  }

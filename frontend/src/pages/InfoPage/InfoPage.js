import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { BACKEND_URL } from '../../values';
import { useNavigate } from 'react-router-dom';
export default function InfoPage(props){

  const navigate = useNavigate()
  const name = props.userData.name;
  const heightFeet = props.userData.heightFeet;
  const heightInches = props.userData.heightInches;
  const currentWeight = props.userData.currentWeight;
  const currentBmi = props.userData.currentBmi;
  const currentBmiStage = props.userData.currentBmiStage;

  const logout = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/auth/logout`,
        { withCredentials: true }
      )
      if(res.data.message){
        navigate("/login")
      }
    } catch (error) {
      console.log(error)
    }
  }


    return (
      <div className='Home min-h-screen mx-auto w-full flex flex-col items-center py-24 gap-6 text-xl'>
        <img src={process.env.PUBLIC_URL + "/Icons/user-icon.png"} className='h-32 w-32' />
        <div className='flex flex-col gap-2 text-left'>
          <p className='flex gap-2'><span className='font-bold'>Name:</span> {name}</p>
          <p className='flex gap-2'><span className='font-bold'>Date of Birth:</span> {props.userData && props.userData.dob ? new Date(props.userData.dob).toLocaleDateString() : 'N/A'}</p>
          <p className='flex gap-2'><span  className='font-bold'>Gender:</span> {props.userData && props.userData.gender}</p>
          <p className='flex gap-2'><span className='font-bold'>Height:</span> {heightFeet} Feet  {heightInches} inches</p>
          <p className='flex gap-2'><span className='font-bold'>Weight:</span> {currentWeight}</p>
          <p className='flex gap-2'><span className='font-bold'>BMI:</span> {currentBmi}</p>
          <p className='flex gap-2'><span className='font-bold'>BMI stage:</span> {currentBmiStage}</p>
        </div>
        <div className='flex gap-4'>
          <Link to={"/fitex"} className='border rounded px-3 border-gray-400 py-1'>Home</Link>
          <button onClick={() => logout()} className='border rounded px-3 border-gray-400 py-1'>Logout</button>
        </div>
      </div>
    )
  }

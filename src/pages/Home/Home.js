import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import WaterCard from '../../Cards/WaterCard/WaterCard';
import SnapCard from '../../Cards/SnapCard/SnapCard';
import BMICard from '../../Cards/BMICard/BMICard';
function Home(props) {
  const navigate = useNavigate();

  const handleInfopageCardClick = () => {
    navigate('/infopage');
  }


  return (
    <div className='Home'>
      <h1>Home Page</h1>
      <div className='infopageCard' onClick={handleInfopageCardClick}></div>
      <div className='foodpageCard'>
        <input></input>
      </div>
      <WaterCard className='HomeWaterCard'updateUserData={props.updateUserData} userData={props.userData}></WaterCard>
      <SnapCard className='HomeSnapCard'updateUserData={props.updateUserData} userData={props.userData}></SnapCard>
       <BMICard className='BmiSnapCard'updateUserData={props.updateUserData} userData={props.userData}></BMICard>
      

    </div>
  )
}

export default Home
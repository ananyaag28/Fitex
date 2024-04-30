import React from 'react';
import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import WaterCard from '../../Cards/WaterCard/WaterCard';
import SnapCard from '../../Cards/SnapCard/SnapCard';
import BMICard from '../../Cards/BMICard/BMICard';
function Home(props) {
  const navigate = useNavigate();

  const handleInfopageCardClick = () => {
    navigate('/infopage');
  }


  return (
    <div className='Home min-h-screen'>
      <nav className='flex items-center justify-between gap-20 px-24 py-4'>
        <input type='text' className='h-fit p-1 w-full border' />
        <Link to={"/profile"} >
          <img src={process.env.PUBLIC_URL + "/Icons/user-icon.png"} className='h-14 w-14' />
        </Link>
      </nav>
      
      <section className='font-bold flex flex-col gap-10'>
        <WaterCard className='HomeWaterCard'updateUserData={props.updateUserData} userData={props.userData}></WaterCard>
        <SnapCard className='HomeSnapCard'updateUserData={props.updateUserData} userData={props.userData}></SnapCard>
        <BMICard className='BmiSnapCard'updateUserData={props.updateUserData} userData={props.userData}></BMICard>

      </section>
      

    </div>
  )
}

export default Home
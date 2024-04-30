import React from 'react'
import './snapCard.css';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

function SnapCard(props) {
  const currentSanpStreak = parseInt(props.userData.currentSanpStreak);
  const longestSanpStreak = parseInt(props.userData.longestSanpStreak);
  const snapStreakGoal = parseInt(props.userData.snapStreakGoal);
  const snapPercentage = (currentSanpStreak/snapStreakGoal)*100;
  const snapBarStyle = {width: `${snapPercentage}%`};


  return (


    <Link to={"/snappage"} className='bg-white rounded-lg w-[80%] mx-auto p-4 flex flex-col gap-3'>


      <div className='flex justify-between'>
        <div className='flex items-end gap-2  text-2xl'>
          <img className="w-14 border border-gray-700 rounded-full p-2" src={process.env.PUBLIC_URL + "/Icons/camera-icon.png"} />
          <p> Snap Streak</p>
        </div>
        <div className='flex items-end'>
          <img className="w-14" src={process.env.PUBLIC_URL + "/Icons/fire-icon.png"} />
          <p>{currentSanpStreak} Days Streak</p>
        </div>
      </div>


      <div className='bg-[#d3d3d3] h-1.5 w-[80%] rounded mx-auto mt-3'>
        <motion.div
          className={`bar bg-gradient-to-r from-yellow-300 to-red-400`}
          initial={{ width: 0 }}
          animate={{ width: `${snapPercentage}%` }}
          transition={{ duration: 1 + (currentSanpStreak / snapStreakGoal) }}>
        </motion.div>
      </div>

      <div className='flex justify-between gap-2 mx-[10%]'>
        <p>Longest Streak: {longestSanpStreak} Days</p>
        <p>Get Premimum on: {snapStreakGoal} Days</p>
      </div>

    </Link>
  )
}

export default SnapCard
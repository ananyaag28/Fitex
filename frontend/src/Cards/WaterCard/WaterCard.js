import React from 'react'
import { motion } from 'framer-motion'
import  {Link} from  'react-router-dom'

function WaterCard(props) {
  const currentWater = parseInt(props.userData.currentWater);
  const waterGoal = parseInt(props.userData.waterGoal);
  const currentwaterStreak = parseInt(props.userData.currentwaterStreak);
  const waterPercentage = (currentWater/waterGoal)*100;


  return (
    <Link to={"/waterpage"} className='bg-white rounded-lg w-[80%] mx-auto p-4 flex flex-col gap-3'>


        <div className='flex justify-between'>
          <div className='flex items-end gap-2  text-2xl'>
            <img className="w-14 border border-gray-700 rounded-full p-2" src={process.env.PUBLIC_URL + "/Icons/drop-icon.png"} />
            <p> Water</p>
          </div>
          <div className='flex items-end'>
            <img className="w-14" src={process.env.PUBLIC_URL + "/Icons/water-icon.png"} />
            <p>{currentwaterStreak} Days Streak</p>
          </div>
        </div>


        <div className='bg-[#d3d3d3] h-1.5 w-[80%] rounded mx-auto mt-3'>
          <motion.div
            className={`bar bg-gradient-to-r from-green-300 to-blue-400`}
            initial={{ width: 0 }}
            animate={{ width: `${waterPercentage}%` }}
            transition={{ duration: 1 + (currentWater / waterGoal) }}>
          </motion.div>
        </div>

        <div className='flex justify-between gap-2 mx-[10%]'>
          <p>Current: {currentWater} ml</p>
          <p>Goal: {waterGoal} ml</p>
        </div>

    </Link>
  )
}

export default WaterCard
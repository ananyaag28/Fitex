import React from 'react'
import './waterCard.css';
import { useNavigate } from 'react-router-dom';

function WaterCard(props) {
  const currentWater = parseInt(props.userData.currentWater);
  const waterGoal = parseInt(props.userData.waterGoal);
  const currentwaterStreak = parseInt(props.userData.currentwaterStreak);
  const waterPercentage = (currentWater/waterGoal)*100;
  const waterBarStyle = {width: `${waterPercentage}%`};
  const navigate = useNavigate();

  const handleWaterpageCardClick = () => {
    navigate('/waterpage');
  }
  return (
    <div className='WaterCard' onClick={handleWaterpageCardClick}>

        <div className='WaterCardTop'>
          <h2 className='WaterCardTopH2'><img className='WaterCardTopLeftImg'></img>Water</h2>
          <h3 className='WaterCardTopH3'><img className='WaterCardTopRightImg'></img>{currentwaterStreak} Days Streak</h3>
        </div>

        <div className='WaterCardMiddle'>
        <div className="Water-bar" style={waterBarStyle}></div>
        </div>
        
        <div className='WaterCardLast'>
        
        <div className='WaterCardLastCurrent'>
          <h3 className='WaterCardLastH3CurrentText'>Current:</h3>
          <h4 className='WaterCardLastH4Current'>{currentWater} ml</h4>
        </div>
        <div className='WaterCardLastGoal'>
          <h3 className='WaterCardLastH3GoalText'>Goal:</h3>
          <h4 className='WaterCardLastH4Goal'>{waterGoal} ml</h4>  
        </div>
        </div>
    </div>
  )
}

export default WaterCard
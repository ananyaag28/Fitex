import React from 'react'
import './snapCard.css';
import { useNavigate } from 'react-router-dom';

function SnapCard(props) {
  const currentSanpStreak = parseInt(props.userData.currentSanpStreak);
  const longestSanpStreak = parseInt(props.userData.longestSanpStreak);
  const snapStreakGoal = parseInt(props.userData.snapStreakGoal);
  const snapPercentage = (currentSanpStreak/snapStreakGoal)*100;
  const snapBarStyle = {width: `${snapPercentage}%`};
  const navigate = useNavigate();

  const handleSnappageCardClick = () => {
    navigate('/snappage');
  }
  return (
    <div className='SnapCard' onClick={handleSnappageCardClick}>

        <div className='SnapCardTop'>
          <h2 className='SnapCardTopH2'><img className='SnapCardTopLeftImg'></img>Snap Streak</h2>
          <h3 className='SnapCardTopH3'><img className='SnapCardTopRightImg'></img>{currentSanpStreak} Days Streak</h3>
        </div>

        <div className='SnapCardMiddle'>
        <div className="Snap-bar" style={snapBarStyle}></div>
        </div>
        
        <div className='SnapCardLast'>
        
        <div className='SnapCardLastCurrent'>
          <h3 className='SnapCardLastH3CurrentText'>Longest Streak:</h3>
          <h4 className='SnapCardLastH4Current'>{longestSanpStreak} Days</h4>
        </div>
        <div className='SnapCardLastGoal'>
          <h3 className='SnapCardLastH3GoalText'>Get Premimum on:</h3>
          <h4 className='SnapCardLastH4Goal'>{snapStreakGoal} Days</h4>  
        </div>
        </div>
    </div>
  )
}

export default SnapCard
import { useState } from 'react'
import React from 'react'
import './water.css'
function Water(props) {
  const currentWater = props.userData.currentWater;
  const waterGoal = props.userData.waterGoal;
  const [showWaterButtons, setShowWaterButtons] = useState(false);

  const handleAddWaterClicked = () =>{
    setShowWaterButtons(true);
  }
  const handleWaterAdded100mlClicked = () =>{
    setShowWaterButtons(false);
    if(currentWater + 100 > waterGoal){
      props.updateUserData({ currentWater: waterGoal});
    }
    else{
    props.updateUserData({ currentWater: currentWater+100});
    }
  }
  const handleWaterAdded250mlClicked = () =>{
    setShowWaterButtons(false);
    if(currentWater + 250 > waterGoal){
      props.updateUserData({ currentWater: waterGoal});
    }
    else{
    props.updateUserData({ currentWater: currentWater+250});
    }
  }
  const handleWaterAdded500mlClicked = () =>{
    setShowWaterButtons(false);
    if(currentWater + 500 > waterGoal){
      props.updateUserData({ currentWater: waterGoal});
    }
    else{
    props.updateUserData({ currentWater: currentWater+500});
    }
  }
  const handleWaterAdded1000mlClicked = () =>{
    setShowWaterButtons(false);
    if(currentWater + 1000 > waterGoal){
      props.updateUserData({ currentWater: waterGoal});
    }
    else{
    props.updateUserData({ currentWater: currentWater+1000});
    }
  }
  const handleWaterAdded2000mlClicked = () =>{
    setShowWaterButtons(false);
    if(currentWater + 2000 > waterGoal){
      props.updateUserData({ currentWater: waterGoal});
    }
    else{
    props.updateUserData({ currentWater: currentWater+2000});
    }
  }

  return (
    <div className='WaterPage'>

    <div className="WaterPageWaterTaken">
      <h2 className='WaterPageWaterTakenh2'>{currentWater} ml</h2>
      <h2 className='WaterPageWaterTakenh2'>{currentWater} ml</h2>
    </div>
    <div className='WaterPageWaterGoal'>
      <h2 className='WaterPageWaterGoalh2'>Goal : {waterGoal} ml</h2>
    </div>
      {!showWaterButtons && (
      <div className='waterPageAddWater'><button className='waterPageAddWaterButton !w-full' onClick={handleAddWaterClicked}>+ Add Water</button></div>
      )}
      {showWaterButtons && (
      <div className='waterPageWaterButton'>
        <button className='waterPageWaterButton100ml' onClick={handleWaterAdded100mlClicked}><img className='waterPageWaterimg100ml'></img>100ml</button>
        <button className='waterPageWaterButton250ml' onClick={handleWaterAdded250mlClicked}><img className='waterPageWaterimg250ml'></img>250ml</button>
        <button className='waterPageWaterButton500ml' onClick={handleWaterAdded500mlClicked}><img className='waterPageWaterimg500ml'></img>500ml</button>
        <button className='waterPageWaterButton1000ml' onClick={handleWaterAdded1000mlClicked}><img className='waterPageWaterimg1000ml'></img>1000ml</button>
        <button className='waterPageWaterButton2000ml' onClick={handleWaterAdded2000mlClicked}><img className='waterPageWaterimg2000ml'></img>2000ml</button>
    </div>
      )}
    </div>
  )
}

export default Water
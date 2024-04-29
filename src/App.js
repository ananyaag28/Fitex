import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import React,{useState} from 'react';
import './App.css';
import Fitex from './Fitex';
import Dob from './components/DOB/Dob';
import Gender from './components/Gender/Gender';
import Height from './components/Height/Height';
import Weight from './components/Weight/Weight';
import InfoPage from './pages/InfoPage/InfoPage';
import Water from './components/Water/Water';
import WaterCard from './Cards/WaterCard/WaterCard';
import Snap from './components/Snap/Snap';
import SnapCard from './Cards/SnapCard/SnapCard';
import BMI from './components/BMI/BMI';
import BMICard from './Cards/BMICard/BMICard';
import Home from './pages/Home/Home';
import Meals from './pages/Meals/Meals';
import RecipePage from './pages/Recipepage/RecipePage';

function App() {

  const [userData, setUserData] = useState({
    dob: null,
    gender: 'Male',
    heightFeet: 5,
    heightInches: 4,
    currentWeight: 54,
    weightGoal: 65,
    currentWater:0,
    waterGoal:3000,
    currentwaterStreak:10,
    currentSanpStreak:25,
    longestSanpStreak:50,
    snapStreakGoal:75,
    currentBmi:0,
    currentBmiStage:'',
  });

  const updateUserData = (data) => {
    setUserData({ ...userData, ...data });
  };



  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/Fitex' element={<Fitex/>}></Route>
          
          <Route path='/dob' element={<Dob userData={userData} updateUserData={updateUserData} />}></Route>
          <Route path='/gender' element={<Gender userData={userData} updateUserData={updateUserData} />}></Route>
          <Route path='/height' element={<Height userData={userData} updateUserData={updateUserData} />}></Route>
          <Route path='/weight' element={<Weight userData={userData} updateUserData={updateUserData} />}></Route>
          <Route path='/infopage' element={<InfoPage userData={userData} updateUserData={updateUserData}/>}></Route>
          <Route path='/waterpage' element={<Water userData={userData} updateUserData={updateUserData} />}></Route>
          <Route path='/watercard' element={<WaterCard userData={userData} updateUserData={updateUserData} />}></Route>
          <Route path='/snappage' element={<Snap userData={userData} updateUserData={updateUserData} />}></Route>
          <Route path='/snapcard' element={<SnapCard userData={userData} updateUserData={updateUserData} />}></Route>
          <Route path='/bmipage' element={<BMI userData={userData} updateUserData={updateUserData}/>}></Route>
          <Route path='/bmicard' element={<BMICard userData={userData} updateUserData={updateUserData}/>}></Route>
          <Route path='/homepage' element={<Home userData={userData} updateUserData={updateUserData}/>}></Route>
          <Route path='/meals' element={<Meals userData={userData} updateUserData={updateUserData}/>}></Route>
            {/* Define the route for the recipe page with a dynamic parameter */}
          <Route path='/meals/:id' element={<RecipePage />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;

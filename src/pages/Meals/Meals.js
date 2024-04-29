import React, { useEffect, useState } from 'react';
import './meals.css';
import { useNavigate } from 'react-router-dom';
import demoData from './recipeInfo.json';
import demoData2 from './outputMeal.json';
import RecipeCard from '../../Cards/RecipeCard/RecipeCard';
function Meals(props) {
    const navigate = useNavigate();

    const handleInfopageCardClick = () => {
        navigate('/infopage');
    }
    const [groupedItems, setGroupedItems] = useState([]);
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    useEffect(() => {
        const updatedGroupedItems = [];
        demoData2.items.forEach(item => {
            let { day } = item;
            day--;
            if (!updatedGroupedItems[day]) {
                updatedGroupedItems[day] = [];
            }
            if (updatedGroupedItems[day].length < 3) {
                updatedGroupedItems[day].push(demoData.find(recipe => recipe.id === JSON.parse(item.value).id));
            }
        });
        setGroupedItems(updatedGroupedItems);
    }, []);
    console.log(groupedItems)

    return (
        <div className='Meals'>
            <div className="mealsPage-header">

            <h1 >My Diet Plan</h1>

            <div className='infopageCard' onClick={handleInfopageCardClick}></div>
            <h3 className='TargetCalories'>Targeted Calories per day - </h3>
            </div>
            <div className='cardsCover'>
                {groupedItems[0] && groupedItems.map((day, i) => {
                    console.log(day)
                    return (
                        <>
                            <h2>{weekDays[i]}</h2>
                            <div className='days'>
                                <RecipeCard data={day[0]} key={`${i} 1`} />
                                <RecipeCard data={day[1]} key={`${i} 2`} />
                                <RecipeCard data={day[2]} key={`${i} 3`} />
                            </div>
                        </>
                    )
                }
                )}
            </div>


        </div>
    )
}

export default Meals
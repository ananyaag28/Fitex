import React, { useEffect, useState } from 'react';
import './meals.css';
import { useNavigate } from 'react-router-dom';
import RecipeCard from '../../Cards/RecipeCard/RecipeCard';
import axios from 'axios';
import mealPlanData from './outputMeal.json'
import BulkrecipeInfodata from './recipeInfo.json'

function Meals(props) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleInfopageCardClick = () => {
        navigate('/infopage');
    }
    const [groupedItems, setGroupedItems] = useState([]);
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
                params: {
                    timeFrame: 'week',
                    targetCalories: '2000',
                    diet: 'vegan'
                },
                headers: {
                    'X-RapidAPI-Key': 'aa34a5b0c4mshb8fc7bab35348a6p1658e2jsna2e88d11649b',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                }
            };
            try{
                // const response = await axios.request(options);
                // const mealPlanData = response.data;

                console.log(mealPlanData)
                const recipeIds = mealPlanData.items.map(item => JSON.parse(item.value).id);

                // Creating the params string for the API request
                const paramsString = recipeIds.join(',');
                console.log(paramsString)

                const BulkRecipeInfoRequest = {
                    method: 'GET',
                    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk',
                    params: { ids: paramsString,
                            includeNutrition: 'true'},
                    headers: {
                    'X-RapidAPI-Key': 'aa34a5b0c4mshb8fc7bab35348a6p1658e2jsna2e88d11649b',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                    }
                };
                // const BulkrecipeInfo = await axios.request(BulkRecipeInfoRequest);
	            // console.log(BulkrecipeInfo.data);
                // const BulkrecipeInfodata = BulkrecipeInfo.data;

                const updatedGroupedItems = [];
                mealPlanData.items.forEach(item => {
            let { day } = item;
            day--;
            if (!updatedGroupedItems[day]) {
                updatedGroupedItems[day] = [];
            }
            if (updatedGroupedItems[day].length < 3) {
                updatedGroupedItems[day].push(BulkrecipeInfodata.find(recipe => recipe.id === JSON.parse(item.value).id));
            }
        });
        setGroupedItems(updatedGroupedItems);
        setLoading(false);
    }
    catch (error) {
        console.error(error);
    }
    };
    fetchData();
    }, []);
    console.log(groupedItems)
    if (loading) {
        return <div>Loading...</div>;
    }
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
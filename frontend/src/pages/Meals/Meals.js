import React, { useEffect, useState } from "react";
import "./meals.css";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../../Cards/RecipeCard/RecipeCard";
import axios, { all } from "axios";

import { BACKEND_URL } from "../../values";
// import mealPlanData from "./outputMeal.json";
// import BulkrecipeInfodata from "./recipeInfo.json";

import { useParams } from "react-router-dom";

function Meals(props) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [diet, setDiet] = useState();
  const [allergies, setAllergies] = useState();
 
  const consumer = localStorage.getItem("consumerId");
  useEffect(() => {
    const fetchBmi = async () => {
      try {
        const res = await axios.post(`${BACKEND_URL}/consumer`, {consumerId : consumer});
        const BMI = res.data.currentBmi;
        console.log(BMI)
        const diet = res.data.diet;
        setDiet(diet)
        console.log(diet)
        const allergies = res.data.allergies;
        console.log(allergies)
        setAllergies(allergies)
        console.log(res.data)
      } catch (error) {
        console.log("Error Logging In Consumer");
      }
    };

    fetchBmi();
  }, []); // Add chosenTask as dependency to recalculate when it changes

  let params = useParams();
  console.log(props);
  const Calories = params.calories;
  console.log(Calories);

  const handleInfopageCardClick = () => {
    navigate("/infopage");
  };
  const [groupedItems, setGroupedItems] = useState([]);
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    const fetchData = async () => {
      console.log(diet)
      console.log(allergies)
      const options = {
        method: "GET",
        url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
        params: {
          timeFrame: "week",
          targetCalories: Calories,
          diet: diet,
          exclude: allergies,
        },
        headers: {
          "X-RapidAPI-Key":
            "aa34a5b0c4mshb8fc7bab35348a6p1658e2jsna2e88d11649b",
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        const mealPlanData = response.data;

        console.log(mealPlanData);
        const recipeIds = mealPlanData.items.map(
          (item) => JSON.parse(item.value).id
        );

        // Creating the params string for the API request
        const paramsString = recipeIds.join(",");
        console.log(paramsString);

        const BulkRecipeInfoRequest = {
          method: "GET",
          url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
          params: { ids: paramsString, includeNutrition: "true" },
          headers: {
            "X-RapidAPI-Key":
              "aa34a5b0c4mshb8fc7bab35348a6p1658e2jsna2e88d11649b",
            "X-RapidAPI-Host":
              "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          },
        };
        const BulkrecipeInfo = await axios.request(BulkRecipeInfoRequest);
        console.log(BulkrecipeInfo.data);
        const BulkrecipeInfodata = BulkrecipeInfo.data;

        const updatedGroupedItems = [];
        mealPlanData.items.forEach((item) => {
          let { day } = item;
          day--;
          if (!updatedGroupedItems[day]) {
            updatedGroupedItems[day] = [];
          }
          if (updatedGroupedItems[day].length < 3) {
            updatedGroupedItems[day].push(
              BulkrecipeInfodata.find(
                (recipe) => recipe.id === JSON.parse(item.value).id
              )
            );
          }
        });
        setGroupedItems(updatedGroupedItems);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(groupedItems);
  if (loading) {
    return <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-3xl">This may take some time...</div>;
  }

  return (
    <div className="Meals">
      <div className=" bg-[#f5f5dc] rounded-lg p-4 shadow-lg flex flex-col items-center justify-between">
        <h1 className="text-3xl font-bold text-[rgb(8,164,132)] mb-4">
          My Diet Plan
        </h1>
        {/* <div className="infopageCard" onClick={handleInfopageCardClick}></div> */}
        <h3 className="TargetCalories text-lg font-semibold text-[rgb(8,164,132)]">
          Targeted Calories per day - {Calories}
        </h3>
      </div>
      <br />
      <br />
      <div className="cardsCover bg-[#f5f5dc] p-6 rounded-lg shadow-lg flex flex-col items-center justify-between overflow-auto">
        {groupedItems[0] &&
          groupedItems.map((day, i) => {
            console.log(day);

            return (
              <>
                <h2 className="text-4xl font-semibold text-grey-900 mb-4">
                  {weekDays[i]}
                </h2>
                <div className="days mx-4 flex flex-wrap justify-center">
                  <RecipeCard data={day[0]} key={`${i} 1`} />

                  <RecipeCard data={day[1]} key={`${i} 2`} />

                  <RecipeCard data={day[2]} key={`${i} 3`} />
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Meals;

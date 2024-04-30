import React, { useState, useEffect } from "react";
import axios from "axios";
import recipeData from "./recipeJson.json";

import { BACKEND_URL } from "../../values";
import { useParams } from "react-router-dom";

const IngredientCard = ({ ingredient }) => {
  return (
    <div className="ingredient-card bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-2 p-4 mb-4 flex flex-col items-center justify-center space-y-4">
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className="w-32 h-32 object-cover"
      />
      <p className="text-lg font-semibold text-center">{ingredient.name}</p>
    </div>
  );
};

const RecipePage = (props) => {
  const [recipeDataa, setRecipeData] = useState(null);
  let params = useParams();
  console.log(props);
  const priceData = params.price;
  console.log(priceData);
  const recipeId = params.id;
  console.log(recipeId);

  const handleOrder = async () => {
    try {
      const res = await axios.post(`${BACKEND_URL}/consumer/order`, {
        recipeId: parseInt(recipeId, 10),
        orderPlaced: true,
        consumerId: localStorage.getItem("consumerId"),
        consumer: localStorage.getItem("consumerId"),
        cook: null,
      });
    } catch (error) {
      console.log("Error Logging In Consumer");
    }
  };

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const recipeData = await axios.get(
          `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/analyzedInstructions`,
          {
            params: {
              stepBreakdown: "true",
            },
            headers: {
              "X-RapidAPI-Key":
                "aa34a5b0c4mshb8fc7bab35348a6p1658e2jsna2e88d11649b",
              "X-RapidAPI-Host":
                "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            },
          }
        );
        setRecipeData(recipeData.data);
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    };

    // fetchRecipeData();
  }, [recipeId]);

  return (
    <div className="bg-[rgb(8,164,132)] p-8 flex flex-col items-center">
      <div className=" bg-[#f5f5dc] p-8 flex flex-col text-grey-900 rounded-3xl m-5">
        <div className="bg-[#abddc]4 rounded-lg p-4 mb-4">
          <h1 className="text-4xl font-bold">Recipe Page</h1>
        </div> <br />
        {recipeData.map((recipe, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
            {recipe.steps.map((step, stepIndex) => (
              <div key={stepIndex} className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Step {step.number}</h3><br />
                <p className="mb-2">{step.step}</p><br />
                <h4 className="text-lg font-semibold mb-1">Ingredients:</h4><br />
                <div className="ingredient-cards flex flex-wrap">
                  {step.ingredients.map((ingredient, ingredientIndex) => (
                    <IngredientCard
                      key={ingredientIndex}
                      ingredient={ingredient}
                    />
                  ))}
                </div><br />
                {step.equipment.length > 0 && (
                  <>
                    <h4 className="text-lg font-semibold mb-1">Equipment:</h4><br />
                    <ul className="list-disc pl-5">
                      {step.equipment.map((equip, equipIndex) => (
                        <IngredientCard key={equipIndex} ingredient={equip} />
                      ))}
                    </ul><br />
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipePage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import recipeData from './recipeJson.json';
import { useParams } from 'react-router-dom';

const IngredientCard = ({ ingredient }) => {
  return (
    <div className="ingredient-card">
      <img src={ingredient.image} alt={ingredient.name} />
      <p>{ingredient.name}</p>
    </div>
  );
};

const RecipePage = (props, {priceData}) => {
  const [recipeDataa, setRecipeData] = useState(null);
  let params = useParams()
  console.log(props);
  console.log(priceData);
  const recipeId = params.id;
  console.log(recipeId)

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const recipeData = await axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/analyzedInstructions`, {
          params: {
            stepBreakdown: 'true'
          },
          headers: {
            'X-RapidAPI-Key': 'aa34a5b0c4mshb8fc7bab35348a6p1658e2jsna2e88d11649b',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
          }
        });
        setRecipeData(recipeData.data);
      } catch (error) {
        console.error('Error fetching recipe data:', error);
      }
    };
    

    // fetchRecipeData();
  }, [recipeId]);

  return (
    <div>
      <h1>Recipe Page</h1>
      {recipeData.map((recipe, index) => (
        <div key={index}>
          <h2>{recipe.name}</h2>
          {recipe.steps.map((step, stepIndex) => (
            <div key={stepIndex}>
              <h3>Step {step.number}</h3>
              <p>{step.step}</p>
              <h4>Ingredients:</h4>
              <div className="ingredient-cards">
                {step.ingredients.map((ingredient, ingredientIndex) => (
                  <IngredientCard key={ingredientIndex} ingredient={ingredient} />
                ))}
              </div>
              {step.equipment.length > 0 && (
                <>
                  <h4>Equipment:</h4>
                  <ul>
                    {step.equipment.map((equip, equipIndex) => (
                      <IngredientCard key={equipIndex} ingredient={equip} />
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      ))}

      <button> Want to order?</button>
    </div>
);
};


export default RecipePage;

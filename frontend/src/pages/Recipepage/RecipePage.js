import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [recipeData, setRecipeData] = useState(null);
  const [orderStatus, setOrderStatus] = useState("waiting");
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const priceData = params.price;
  const recipeId = params.id;
  const reloadTime = 1 * 60 * 1000; // 5 minutes in milliseconds
  const consumerId = Number(localStorage.getItem("consumerId"));
  const [ordersFromDatabase, setOrdersFromDatabase] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      window.location.reload();
    }, reloadTime);

    return () => clearTimeout(timerId);
  }, []); 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/consumer/getOrder`);
        console.log(res.data);
        setOrdersFromDatabase(res.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    // Find if there's a matching order in the database
    const matchingOrder = ordersFromDatabase.find(order => 
      order.consumerId === consumerId && order.recipeId === recipeId
    );

    // Update orderStatus based on the matching order
    if (matchingOrder) {
      if (matchingOrder.orderAccepted) {
        setOrderStatus("accepted");
      } else if (matchingOrder.orderPlaced) {
        setOrderStatus("waiting");
      } else {
        setOrderStatus("order");
      }
    } else {
      setOrderStatus("order");
    }
  }, [ordersFromDatabase, consumerId, recipeId]);

  const handleOrder = async () => {
    setOrderStatus("waiting");
    try {
      const res = await axios.post(`${BACKEND_URL}/consumer/order`, {
        recipeId: parseInt(recipeId, 10),
        orderPlaced: true,
        orderAccepted: false,
        consumerId: Number(localStorage.getItem("consumerId")),
        cookId: null,
      });
      console.log(res);
    } catch (error) {
      console.log("Error Logging In Consumer");
    }
  };

  useEffect(() => {
    const fetchRecipeData = async () => {
      const options = {
        method: "GET",
        url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/324694/analyzedInstructions",
        params: {
          stepBreakdown: "true",
        },
        headers: {
          "X-RapidAPI-Key":
            "aa34a5b0c4mshb8fc7bab35348a6p1658e2jsna2e88d11649b",
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };

      try {
        const recipeData = await axios.request(options);
        console.log(recipeData.data);
        setRecipeData(recipeData.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipeData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[rgb(8,164,132)] p-8 flex flex-col items-center">
      <div className=" bg-[#f5f5dc] p-8 flex flex-col text-grey-900 rounded-3xl m-5">
        <div className="bg-[#abddc]4 rounded-lg p-4 mb-4">
          <h1 className="text-4xl font-bold">Recipe Page</h1>
        </div>{" "}
        <br />
        {recipeData.map((recipe, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
            {recipe.steps.map((step, stepIndex) => (
              <div key={stepIndex} className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Step {step.number}
                </h3>
                <br />
                <p className="text-xl">{step.step}</p>
                <br />
                <h4 className="text-lg font-semibold mb-1">Ingredients:</h4>
                <br />
                <div className="ingredient-cards flex flex-wrap">
                  {step.ingredients.map((ingredient, ingredientIndex) => (
                    <IngredientCard
                      key={ingredientIndex}
                      ingredient={ingredient}
                    />
                  ))}
                </div>
                <br />
                {step.equipment.length > 0 && (
                  <>
                    <h4 className="text-lg font-semibold mb-1">Equipment:</h4>
                    <br />
                    <ul className="list-disc pl-5">
                      {step.equipment.map((equip, equipIndex) => (
                        <IngredientCard key={equipIndex} ingredient={equip} />
                      ))}
                    </ul>
                    <br />
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold mb-4">
            Price per serving: ₹{Math.round(priceData)}
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleOrder}
          >
            {orderStatus === "waiting"
              ? "Waiting to be accepted"
              : orderStatus === "accepted"
              ? "Order accepted"
              : "Want to order?"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

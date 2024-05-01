import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
import Fitex from "./fitex.png";
import { BACKEND_URL } from "../../values";

const Cook = () => {
  const[orders, setOrders] = useState([])
  const [BulkrecipeInfodata, setBulkrecipeInfodata] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useNavigate(); // Initialize useHistory hook

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/cook`);
        console.log(res.data);
        setOrders(res.data)
        const data = res.data;
        const recipeIds = data.map((item) => item.recipeId);
        console.log(recipeIds); // Output: ['635446', '659604']

        // If you want to store it in a single string separated by commas:
        const recipeIdsString = recipeIds.join(",");
        console.log(recipeIdsString);

        const options = {
          method: "GET",
          url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
          params: {
            ids: recipeIdsString,
            includeNutrition: "true",
          },
          headers: {
            "X-RapidAPI-Key":
              "aa34a5b0c4mshb8fc7bab35348a6p1658e2jsna2e88d11649b",
            "X-RapidAPI-Host":
              "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          },
        };

        try {
          const BulkrecipeInfo = await axios.request(options);
          console.log(BulkrecipeInfo.data);
          setBulkrecipeInfodata(BulkrecipeInfo.data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // Function to handle click on recipe card
  const handleRecipeClick = (recipeId, orderId) => {
    // Redirect to dynamic route
    history(`/cookRec/${recipeId}/${orderId}`);
  };

  return (
    <div class="bg-[rgb(8,164,132)] min-h-screen flex items-center justify-center">
      <div className="absolute left-0 top-0 h-1/10">
        <img className="h-[110px]" src={Fitex} />
      </div>
      <div class="bg-[#f5f5dc] flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        <div class="bg-[#abddc4] px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
          <nav class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
            <a
              class="text-grey-900/50 p-4 inline-flex justify-center rounded-md hover:bg-green-700/50 hover:text-grey-900 smooth-hover"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
          </nav>
          <div class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2"></div>
        </div>
        <div class="flex-1 px-2 sm:px-0">
          <div class="flex justify-between items-center">
            <h3 class="text-3xl font-extralight text-grey-900/50">
              Recipe Requests
            </h3>
            <div class="inline-flex items-center space-x-2">
              <a
                class="bg-[#abddc4] text-grey-900/50 p-2 rounded-md hover:text-grey-900 smooth-hover"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </a>
              <a
                class="bg-[#abddc4] text-grey-900/50 p-2 rounded-md hover:text-grey-900 smooth-hover"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {loading ? (
              <p>Loading...</p>
            ) : (
              BulkrecipeInfodata.map((recipe, id) => (
                <a
                  key={recipe.id}
                  class="relative group bg-[#abddc4] py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-green-700/50 hover:smooth-hover"
                  onClick={() => handleRecipeClick(recipe.id, orders[id].id)} // Attach click event to each recipe card
                  // href={cookRec/${recipe.id}} // Set the dynamic route as href
                >
                  <img
                    class="w-20 h-20 object-cover object-center"
                    src={recipe.image}
                    alt={recipe.title}
                    style={{ height: "100px", width: "150px" }} 
                  />
                  <h4 class="text-grey-900 text-2xl font-bold capitalize text-center">
                    {recipe.title}
                  </h4>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cook;
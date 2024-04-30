import "./recipeCard.css";

export default function RecipeCard({ data }) {
  
  const idRecipe = data.id;
  console.log(idRecipe);
  const Price = data.pricePerServing;
  return (
    <a href={`/meals/${idRecipe}/${Price}`}>
      <div className="recipeCard bg-[#abddc4] p-4 rounded-lg shadow-lg flex flex-col items-center">
  <img src={data?.image} className="w-full h-64 object-cover rounded-lg mb-4"></img>
  <h3 className="text-2xl font-semibold text-grey-900/50 mb-4 text-center">{data?.title}</h3>
  <div className="nutritions">
    {data && (
      <>
        <h4 className="text-lg font-medium text-grey-900/50 mb-2">
          {data.nutrition.nutrients[1].name} :{" "}
          {data.nutrition.nutrients[1].amount}{" "}
          {data.nutrition.nutrients[1].unit}
        </h4>
        <h4 className="text-lg font-medium text-grey-900/50 mb-2">
          {data.nutrition.nutrients[0].name} :{" "}
          {data.nutrition.nutrients[0].amount}{" "}
          {data.nutrition.nutrients[0].unit}
        </h4>
      </>
    )}
  </div>
</div>
    </a>
  );
}

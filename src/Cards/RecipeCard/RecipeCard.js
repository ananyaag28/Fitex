import "./recipeCard.css";

export default function RecipeCard({ data }) {
  console.log("datatatata", data);
  const idRecipe = data.id;
  console.log(idRecipe);
  return (
    <a href={`/meals/${idRecipe}`}>
      <div className="recipeCard">
        <img src={data?.image}></img>
        <h3>{data?.title}</h3>
        <div className="nutritions">
          {data && (
            <>
              <h4>
                {data.nutrition.nutrients[1].name} :{" "}
                {data.nutrition.nutrients[1].amount}{" "}
                {data.nutrition.nutrients[1].unit}
              </h4>
              <h4>
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

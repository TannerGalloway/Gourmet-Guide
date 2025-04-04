import React from "react";
import "../../css/recipesList.css";

function RecipesList({ name, img }) {
  return (
    <div
      className="recipeOption"
      onClick={() =>
        (window.location.href = `/recipes/${name?.split(" ").join("-")}`)
      }>
      <img className="recipeImg" src={img === "" ? null : img} alt={name} />
      <p className="mealName">{name}</p>
    </div>
  );
}

export default RecipesList;

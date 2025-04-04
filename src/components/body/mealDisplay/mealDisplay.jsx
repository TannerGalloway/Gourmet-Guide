import React from "react";
import { useParams } from "react-router-dom";
import RecipeTab from "../pageTabs";

function MealDisplay() {
  const { category } = useParams();

  return (
    <RecipeTab
      apiLink={
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category
      }
      use={"filter"}
      class={"recipes"}
    />
  );
}

export default MealDisplay;

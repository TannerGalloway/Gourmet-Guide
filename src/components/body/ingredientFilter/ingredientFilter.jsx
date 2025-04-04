import React from "react";
import IngredientTab from "../pageTabs";

function IngredientFilter() {
  return (
    <IngredientTab
      apiLink={
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=" +
        sessionStorage.getItem("searchTerm")
      }
      use={"search"}
    />
  );
}

export default IngredientFilter;

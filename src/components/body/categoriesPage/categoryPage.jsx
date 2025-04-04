import React from "react";
import CategoryTab from "../pageTabs";

function CategoryPage() {
  return (
    <CategoryTab
      apiLink={"https://www.themealdb.com/api/json/v1/1/categories.php"}
      use={"categories"}
      class={"catagory"}
    />
  );
}

export default CategoryPage;

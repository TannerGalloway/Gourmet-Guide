import React, { useEffect, useState } from "react";
import "../../css/popRecipes.css";
import RecipesList from "./recipesList";
import axios from "axios";

function PopRecipes() {
  const [meals, setMeals] = useState([
    {
      img: "",
      name: "",
      area: "",
      id: "0",
    },
    {
      img: "",
      name: "",
      area: "",
      id: "1",
    },
    {
      img: "",
      name: "",
      area: "",
      id: "2",
    },
    {
      img: "",
      name: "",
      id: "3",
    },
    {
      img: "",
      name: "",
      id: "4",
    },
    {
      img: "",
      name: "",
      id: "5",
    },
  ]);

  useEffect(() => {
    const getmeals = async (loadedmealState) => {
      for (let i = 0; i < 6; i++) {
        try {
          const res = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          const responce = await res.data.meals[0];

          if (loadedmealState === null || loadedmealState === "false") {
            // Set recipe in session storage
            sessionStorage.setItem(
              "PopularRecipe" + i,
              JSON.stringify({
                img: responce.strMealThumb,
                name: responce.strMeal,
                area: responce.strArea,
                id: i,
              })
            );

            // Update state
            setMeals((prevRecipes) => {
              const updatedRecipes = [...prevRecipes];
              updatedRecipes[i] = {
                img: JSON.parse(sessionStorage.getItem("PopularRecipe" + i))
                  .img,
                name: JSON.parse(sessionStorage.getItem("PopularRecipe" + i))
                  .name,
                area: JSON.parse(sessionStorage.getItem("PopularRecipe" + i))
                  .area,
              };
              return updatedRecipes;
            });
          } else if (loadedmealState === "true") {
            // Set recipe in state from session storage
            setMeals((prevRecipes) => {
              const updatedRecipes = [...prevRecipes];
              updatedRecipes[i] = {
                img: JSON.parse(sessionStorage.getItem("PopularRecipe" + i))
                  .img,
                name: JSON.parse(sessionStorage.getItem("PopularRecipe" + i))
                  .name,
                area: JSON.parse(sessionStorage.getItem("PopularRecipe" + i))
                  .area,
              };
              return updatedRecipes;
            });
          }
        } catch (error) {
          console.error("Error fetching popular recipes:", error);
        }
      }

      sessionStorage.setItem("recipesLoaded", true);
    };

    // Check if recipes are already loaded in session storage
    if (sessionStorage.getItem("recipesLoaded") === null) {
      getmeals(null);
    } else if (sessionStorage.getItem("recipesLoaded") === "true") {
      getmeals("true");
    }
  }, []);

  return (
    <div className="popRecipesContainer">
      <RecipesList
        name={meals[0].name}
        img={meals[0].img}
        recipeId={meals[0].id}
      />
      <RecipesList
        name={meals[1].name}
        img={meals[1].img}
        recipeId={meals[1].id}
      />
      <RecipesList
        name={meals[2].name}
        img={meals[2].img}
        recipeId={meals[2].id}
      />
      <RecipesList
        name={meals[3].name}
        img={meals[3].img}
        recipeId={meals[3].id}
      />
      <RecipesList
        name={meals[4].name}
        img={meals[4].img}
        recipeId={meals[4].id}
      />
      <RecipesList
        name={meals[5].name}
        img={meals[5].img}
        recipeId={meals[5].id}
      />
    </div>
  );
}

export default PopRecipes;

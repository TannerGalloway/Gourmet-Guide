import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/siderecipes.css";

function Siderecipes() {
  const [popRecipes, setPopRecipes] = useState([
    {
      img: "",
      name: "",
      area: "",
    },
    {
      img: "",
      name: "",
      area: "",
    },
    {
      img: "",
      name: "",
      area: "",
    },
  ]);

  useEffect(() => {
    const getmeals = async (loadedmealState) => {
      for (let i = 0; i < 3; i++) {
        try {
          const res = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          const responce = res.data.meals[0];

          if (loadedmealState === null || loadedmealState === "false") {
            // Set recipe in session storage
            sessionStorage.setItem(
              "PopularRecipe" + i,
              JSON.stringify({
                img: responce.strMealThumb,
                name: responce.strMeal,
                area: responce.strArea,
              })
            );

            // Update state
            setPopRecipes((prevRecipes) => {
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
            setPopRecipes((prevRecipes) => {
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

      sessionStorage.setItem("popRecipesLoaded", true);
    };

    // Check if recipes are already loaded in session storage
    if (sessionStorage.getItem("popRecipesLoaded") === null) {
      getmeals(null);
    } else if (sessionStorage.getItem("popRecipesLoaded") === "true") {
      getmeals("true");
    }
  }, []);

  return (
    <div className="sidepopular">
      <h4 style={{ color: "#8e0034" }} className="sidetext">
        {" "}
        Popular Recipes
      </h4>

      {popRecipes.map((recipe, index) => (
        <div key={index} className={`siderecipe${index + 1}`}>
          <a href={"/recipes/" + recipe.name.split(" ").join("-")}>
            <img
              className="sideimg"
              src={recipe.img ? recipe.img : null}
              alt={recipe.name}
            />
          </a>
          <a
            className="sidetext"
            href={"/recipes/" + recipe.name.split(" ").join("-")}>
            <p className="foodDescription">
              {recipe.name}
              <br />
              {"A(n) " + recipe.area + " dish"}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Siderecipes;

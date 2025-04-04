import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import "../../css/recipePage.css";
import axios from "axios";

function RecipePage() {
  const [recipeData, setRecipeData] = useState({
    RecipeName: "",
    recipeImg: "",
    ingredient: [],
    measurement: [],
    recipeVideo: "",
    directions: "",
  });

  const { recipe } = useParams();

  const getIngredientImgs = useCallback(() => {
    let mainDiv = document.getElementsByClassName("ingredients")[0];

    // Clear existing ingredients
    while (mainDiv && mainDiv.firstChild) {
      mainDiv.removeChild(mainDiv.firstChild);
    }

    // Add click event to handle ingredient clicks
    const handleIngredientClick = (event) => {
      if (event.target.parentElement.parentElement.className === "ingredient") {
        const ingredientClicked = event.target.id.split(" ").join("%20");
        sessionStorage.setItem("searchTerm", ingredientClicked);
      }
    };

    document.addEventListener("click", handleIngredientClick);

    // Create ingredient elements
    recipeData.ingredient.forEach((ingredient, i) => {
      const ingredientDiv = document.createElement("div");
      ingredientDiv.setAttribute("class", "ingredient");
      ingredientDiv.setAttribute("id", ingredient);

      const ingredientLink = document.createElement("a");
      ingredientLink.setAttribute("href", "/ingredient-results");

      const ingredientImg = document.createElement("img");
      ingredientImg.setAttribute(
        "src",
        "https://www.themealdb.com/images/ingredients/" +
          ingredient.split(" ").join("%20") +
          "-Small.png"
      );
      ingredientImg.setAttribute(
        "alt",
        recipeData.measurement[i] + " " + ingredient
      );
      ingredientImg.setAttribute("id", ingredient);

      const imgText = document.createElement("p");
      imgText.setAttribute("id", ingredient);
      const imgTextContent = document.createTextNode(
        recipeData.measurement[i] + " " + ingredient
      );

      imgText.appendChild(imgTextContent);
      ingredientLink.appendChild(ingredientImg);
      ingredientLink.appendChild(imgText);
      ingredientDiv.appendChild(ingredientLink);
      mainDiv.appendChild(ingredientDiv);
    });

    return () => {
      document.removeEventListener("click", handleIngredientClick);
    };
  }, [recipeData.ingredient, recipeData.measurement]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeName = recipe.split("-").join(" ");

      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipeName
        );
        const responce = res.data.meals[0];

        // Process video URL
        const videolink = responce.strYoutube;
        const videoID = videolink.substring(
          videolink.search("=") + 1,
          videolink.length
        );
        const videourl = videolink.substring(0, videolink.search("m") + 1);

        // Process instructions
        const directions = responce.strInstructions.replace("\r\n", "");
        const instructionList =
          document.getElementsByClassName("instructions")[0];

        // Clear existing instructions except the heading
        while (instructionList && instructionList.children.length > 1) {
          instructionList.removeChild(instructionList.lastChild);
        }

        // Parse instruction sentences
        let stringStart = 0;
        const periodNum = directions.match(/\./g)?.length || 0;

        for (let i = 0; i < periodNum; i++) {
          const periodPosition = directions.indexOf(".", stringStart);
          const instruction = directions.substring(
            stringStart,
            periodPosition + 1
          );

          if (!instruction.match(/\d(?=\.)/)) {
            const instructionListItem = document.createElement("li");
            const instructionText = document.createTextNode(instruction);
            instructionListItem.appendChild(instructionText);
            stringStart = periodPosition + 1;
            instructionList.appendChild(instructionListItem);
          } else {
            stringStart = periodPosition + 1;
          }
        }

        // Extract ingredients and measurements
        const ingredients = [];
        const measurements = [];

        for (const key in responce) {
          if (key.includes("Ingredient") || key.includes("Measure")) {
            if (
              key.includes("Ingredient") &&
              responce[key] !== "" &&
              responce[key] !== null
            ) {
              ingredients.push(responce[key]);
            } else if (
              key.includes("Measure") &&
              responce[key] !== "" &&
              responce[key] !== null
            ) {
              measurements.push(responce[key]);
            }
          }
        }

        // Update state
        setRecipeData({
          RecipeName: recipeName,
          recipeImg: responce.strMealThumb,
          ingredient: ingredients,
          measurement: measurements,
          recipeVideo: videourl + "/embed/" + videoID,
          directions: directions,
        });
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [recipe]);

  useEffect(() => {
    if (recipeData.ingredient.length > 0) {
      getIngredientImgs();
    }
  }, [recipeData.ingredient, getIngredientImgs]);

  return (
    <div className="recipesContainer">
      <div className="recipeHeading">
        <h4 className="mealName">{recipeData.RecipeName}</h4>
      </div>
      <div className="recipeContent">
        <img
          id="mealImg"
          src={recipeData?.recipeImg ? recipeData.recipeImg : null}
          alt={recipeData?.RecipeName ? recipeData.RecipeName : null}
        />
        <h4 className="ingredientsTitle">Ingredients</h4>
        <p className="ingredientsMessage">
          {
            "(Select an ingredient to get a list of recipes that use the same ingredient)"
          }
        </p>
        <div className="ingredients"></div>
      </div>
      <div className="instructionsContainer">
        <h4 className="instructionsTitle">Instructions</h4>
        <ol className="instructions"></ol>
        {/* Instructions will be added in the useEffect */}
      </div>
    </div>
  );
}

export default RecipePage;

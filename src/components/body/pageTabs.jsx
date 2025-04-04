import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/pageTabs.css";

function PageTabs({ apiLink, use }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiLink);
        const currentDiv = document.getElementById("ContainerDiv");

        // Clear existing content
        while (currentDiv && currentDiv.firstChild) {
          currentDiv.removeChild(currentDiv.firstChild);
        }

        switch (use) {
          // load categories page
          case "categories": {
            const responce = res.data.categories;
            const dataLength = responce.length;

            for (let h = 0; h < dataLength; h++) {
              const responceId = responce[h];
              const categoryTitle = responceId.strCategory;
              const categoryImg = responceId.strCategoryThumb;

              const mainDiv = document.createElement("div");
              mainDiv.setAttribute("class", "meal");

              const atag = document.createElement("a");
              atag.setAttribute("href", "/categories/" + categoryTitle);

              const subDiv = document.createElement("div");
              subDiv.setAttribute("class", "catagory");

              const imgElement = document.createElement("img");
              imgElement.setAttribute("src", categoryImg);
              imgElement.setAttribute("alt", categoryTitle);

              const textTag = document.createElement("h4");
              const text = document.createTextNode(categoryTitle);

              subDiv.appendChild(imgElement);
              textTag.appendChild(text);
              subDiv.appendChild(textTag);
              atag.appendChild(subDiv);
              mainDiv.appendChild(atag);
              currentDiv.appendChild(mainDiv);
            }
            break;
          }

          // filter when a category was clicked
          case "filter": {
            const responce = res.data.meals;
            const dataLength = responce.length;

            for (let i = 0; i < dataLength; i++) {
              const responceId = responce[i];
              const mealTitle = responceId.strMeal;
              const mealImg = responceId.strMealThumb;

              const atag = document.createElement("a");
              atag.setAttribute(
                "href",
                "/recipes/" + mealTitle.split(" ").join("-")
              );

              const subDiv = document.createElement("div");
              subDiv.setAttribute("class", "recipe");

              const imgElement = document.createElement("img");
              imgElement.setAttribute("src", mealImg);
              imgElement.setAttribute("alt", mealTitle);

              const textTag = document.createElement("h4");
              const text = document.createTextNode(mealTitle);

              subDiv.appendChild(imgElement);
              textTag.appendChild(text);
              subDiv.appendChild(textTag);
              atag.appendChild(subDiv);
              currentDiv.appendChild(atag);
            }
            break;
          }

          // search page render/ingredient filter
          case "search": {
            const responce = res.data.meals;
            if (responce === null) {
              const subDiv = document.createElement("div");
              subDiv.setAttribute("class", "error");

              const textTag = document.createElement("h2");
              const text = document.createTextNode("No Recipes Found");

              textTag.appendChild(text);
              subDiv.appendChild(textTag);
              currentDiv.appendChild(subDiv);
            } else {
              const dataLength = responce.length;

              for (let j = 0; j < dataLength; j++) {
                const responceId = responce[j];
                const mealTitle = responceId.strMeal;
                const mealImg = responceId.strMealThumb;

                const atag = document.createElement("a");
                atag.setAttribute(
                  "href",
                  "/recipes/" + mealTitle.split(" ").join("-")
                );

                const subDiv = document.createElement("div");
                subDiv.setAttribute("class", "recipe");

                const imgElement = document.createElement("img");
                imgElement.setAttribute("src", mealImg);
                imgElement.setAttribute("alt", mealTitle);

                const textTag = document.createElement("h2");
                textTag.setAttribute("class", "recipeTitle");
                const text = document.createTextNode(mealTitle);

                subDiv.appendChild(imgElement);
                textTag.appendChild(text);
                subDiv.appendChild(textTag);
                atag.appendChild(subDiv);
                currentDiv.appendChild(atag);
              }
            }
            break;
          }

          default: {
            const atag = document.createElement("a");
            atag.setAttribute("href", "/");

            const subDiv = document.createElement("div");
            subDiv.setAttribute("class", "error");

            const textTag = document.createElement("h2");
            const text = document.createTextNode("ERROR 404 Page Not Found");

            textTag.appendChild(text);
            subDiv.appendChild(textTag);
            atag.appendChild(subDiv);
            currentDiv.appendChild(atag);
            break;
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiLink, use]);

  return (
    <div id="ContainerDiv">{/* Content will be added by the useEffect */}</div>
  );
}

export default PageTabs;

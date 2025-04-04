import React, { useState, useEffect } from "react";
import axios from "axios";
import Tabs from "./foodCarouselTabs";

function FoodCarousel() {
  const [meals, setMeals] = useState([
    {
      img: "",
      name: "",
      area: "",
      id: "0",
      active: true,
    },
    {
      img: "",
      name: "",
      area: "",
      id: "1",
      active: false,
    },
    {
      img: "",
      name: "",
      area: "",
      id: "2",
      active: false,
    },
  ]);

  const [targetElementID, setTargetElementID] = useState(0);
  const [tabClickActive, setTabClickActive] = useState(true);

  useEffect(() => {
    // Fetch random meals when component mounts
    const fetchMeals = async () => {
      for (let i = 0; i < 3; i++) {
        try {
          const response = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          const mealData = response.data.meals[0];

          setMeals((prevMeals) => {
            const updatedMeals = [...prevMeals];
            updatedMeals[i] = {
              ...updatedMeals[i],
              img: mealData.strMealThumb,
              name: mealData.strMeal,
              area: mealData.strArea,
            };
            return updatedMeals;
          });
        } catch (error) {
          console.error("Error fetching meal data:", error);
        }
      }
    };

    fetchMeals();
  }, []);

  const tabClickHandle = (event) => {
    if (tabClickActive) {
      setTabClickActive(false);

      // Gets id of tab clicked
      let id;
      if (
        event.target.parentElement.className === "text" ||
        event.target.parentElement.className === "thumbnail"
      ) {
        id = event.target.parentElement.parentElement.id;
      } else {
        id = event.target.parentElement.id;
      }

      setTargetElementID(id);

      // Update active state for tabs
      setMeals((prevMeals) =>
        prevMeals.map((meal) => ({
          ...meal,
          active: meal.id === id,
        }))
      );

      // Re-enable tab clicking after delay
      setTimeout(() => setTabClickActive(true), 1000);
    }
  };

  return (
    <div className="mainImg">
      <a href={"/recipes/" + meals[targetElementID]?.name.split(" ").join("-")}>
        <img
          style={{
            width: "100%",
            height: "425px",
            borderStyle: "solid",
            borderColor: "white",
          }}
          src={meals[targetElementID]?.img ? meals[targetElementID].img : null}
          alt={meals[targetElementID]?.name}
        />
      </a>
      <div
        className="flex-container"
        style={{ display: "inline-flex", position: "relative", bottom: "8px" }}>
        {meals.map((meal, index) => (
          <Tabs
            key={index}
            action={tabClickHandle}
            id={meal.id}
            class={
              meal.active
                ? `Tab${parseInt(meal.id) + 1}Active`
                : `tab${parseInt(meal.id) + 1}`
            }
            img={meal.img}
            alt={meal.name}
            titleClass={meal.active ? "TitleActive" : "title"}
            title={meal.name}
            subtitleClass={meal.active ? "SubtitleActive" : "subtitle"}
            subtitle={"A(n) " + meal.area + " dish"}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodCarousel;

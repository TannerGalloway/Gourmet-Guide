import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../heading/navbar";
import Sidevideo from "../sidebar/sidevideo";
import Siderecipes from "../sidebar/siderecipes";
import Sidefacts from "../sidebar/sidefacts";
import Socialmedia from "../sidebar/socialmedia";
import Home from "./homepage/homeBody";
import About from "./about/aboutpage";
import Videos from "./videospage/videos";
import PopRecipes from "./popularRecipes/popRecipes";
import Categories from "./categoriesPage/categoryPage";
import MealDisplay from "./mealDisplay/mealDisplay";
import SearchResults from "./searchResults/searchResults";
import RecipePage from "./recipePage/recipePage";
import IngredientFilter from "./ingredientFilter/ingredientFilter";

function Body() {
  return (
    <Router>
      <div className="body">
        <div className="left" style={{ width: "730px", float: "left" }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/videos" element={<Videos />} />
            <Route exact path="/popularrecipes" element={<PopRecipes />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route
              exact
              path="/categories/:category"
              element={<MealDisplay />}
            />
            <Route exact path="/search-results" element={<SearchResults />} />
            <Route
              exact
              path="/ingredient-results"
              element={<IngredientFilter />}
            />
            <Route exact path="/recipes/:recipe" element={<RecipePage />} />
          </Routes>
        </div>
        <div className="right" style={{ float: "right", width: "360px" }}>
          <Sidevideo title={"Cooking Video"} pageUse={"side"} />
          <Siderecipes />
          <Sidefacts />
          <Socialmedia />
        </div>
      </div>
    </Router>
  );
}

export default Body;

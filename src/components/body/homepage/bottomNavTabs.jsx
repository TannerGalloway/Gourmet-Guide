import React from "react";
import "../../css/bottomNavTabs.css";
import featuredImg from "../../images/featured.jpg";
import categoriesImg from "../../images/categories.jpg";
import videosImg from "../../images/videos.jpg";
import aboutImg from "../../images/about.jpg";

function BottomNavTabs() {
  return (
    <div className="navtabs">
      <a href="/about">
        <div className="tab">
          <h2 className="tabHeader">About</h2>
          <img src={aboutImg} alt={"About"} />
        </div>
      </a>
      <a href="/videos">
        <div className="tab">
          <h2 className="tabHeader">Videos</h2>
          <img src={videosImg} alt={"Videos"} />
        </div>
      </a>
      <a href="/popularrecipes">
        <div className="tab">
          <h2 className="tabHeader">Recipes</h2>
          <img src={featuredImg} alt={"Recipes"} />
        </div>
      </a>
      <a href="/categories">
        <div className="tab">
          <h2 className="tabHeader">Categories</h2>
          <img src={categoriesImg} alt={"Categories"} />
        </div>
      </a>
    </div>
  );
}

export default BottomNavTabs;

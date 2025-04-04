import React from "react";
import FoodCarousel from "./foodCarousel";
import BottomNavTabs from "./bottomNavTabs";

function HomeBody() {
  return (
    <>
      <div className="body">
        <FoodCarousel />
      </div>
      <div className="footer" style={{ margin: "50px 0px 50px 0px" }}>
        <BottomNavTabs />
      </div>
    </>
  );
}

export default HomeBody;

import React from "react";
import "../../css/foodCarouselTabs.css";

function FoodCarouselTabs({
  id,
  action,
  class: className,
  img,
  alt,
  title,
  subtitle,
  titleClass,
  subtitleClass,
}) {
  return (
    <div id={id} onClick={action} className={className}>
      <div className="thumbnail" style={{ display: "inline" }}>
        <img src={img ? img : null} alt={alt} />
      </div>
      <div className="text">
        <p className={titleClass}>{title}</p>
        <p className={subtitleClass}>{subtitle}</p>
      </div>
    </div>
  );
}

export default FoodCarouselTabs;

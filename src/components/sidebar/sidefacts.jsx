import React, { useEffect } from "react";
import foodfactsarr from "./foodfacts.json";
import "../css/sidefacts.css";

function Sidefacts() {
  useEffect(() => {
    const facts = document.querySelectorAll(".foodfacts > p");
    const usedIndices = new Set();

    facts.forEach((factElement) => {
      let index;
      // Find an unused random fact
      do {
        index = Math.floor(Math.random() * foodfactsarr.length);
      } while (usedIndices.has(index));

      usedIndices.add(index);
      factElement.setAttribute("id", index.toString());
      factElement.textContent = foodfactsarr[index];
    });
  }, []);

  return (
    <div className="foodfacts">
      <h4 style={{ color: "#8e0034", fontSize: "25px" }}> Fun Food Facts</h4>
      <p className="factsText"></p>
      <p className="factsText"></p>
      <p className="factsText"></p>
    </div>
  );
}

export default Sidefacts;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/sidevideo.css";

function Sidevideo({ title, pageUse }) {
  const [mealName, setMealName] = useState("");
  const [mealLink, setMealLink] = useState(null);

  useEffect(() => {
    const getVideo = async (loadedVideoState) => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        let embedUrl = null;
        const responce = res.data.meals[0];
        if (responce.strYoutube !== "") {
          const videolink = responce.strYoutube;
          const videoID = videolink.substring(
            videolink.search("=") + 1,
            videolink.length
          );
          const videourl = videolink.substring(0, videolink.search("m") + 1);
          embedUrl = videourl + "/embed/" + videoID;
        }

        switch (loadedVideoState) {
          case "videos":
            setMealName(responce.strMeal);
            setMealLink(embedUrl);
            break;

          case null:
            // Set video in session storage
            sessionStorage.setItem(
              "CookingVideo",
              JSON.stringify({
                mealName: responce.strMeal,
                mealLink: embedUrl,
              })
            );

            // Set video in state from session storage
            setMealName(
              JSON.parse(sessionStorage.getItem("CookingVideo")).mealName
            );
            setMealLink(
              JSON.parse(sessionStorage.getItem("CookingVideo")).mealLink
            );
            sessionStorage.setItem("CookingVideoLoaded", true);
            break;

          case "true":
            // Set video in state from session storage
            setMealName(
              JSON.parse(sessionStorage.getItem("CookingVideo")).mealName
            );
            setMealLink(
              JSON.parse(sessionStorage.getItem("CookingVideo")).mealLink
            );
            break;

          default:
            break;
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    if (pageUse === "side") {
      const sideDiv = document.getElementsByClassName("right");
      if (sideDiv[0]) {
        sideDiv[0].children[0].setAttribute("id", "side");
      }

      if (sessionStorage.getItem("CookingVideoLoaded") === null) {
        getVideo(null);
      } else if (sessionStorage.getItem("CookingVideoLoaded") === "true") {
        getVideo("true");
      }
    } else if (pageUse === "videos") {
      getVideo("videos");
    }
  }, [pageUse]);

  return (
    <div className="homeVideo">
      <h4 style={{ color: "#8e0034", fontSize: "25px" }}>{title}</h4>
      <iframe
        title={mealName}
        id="player"
        type="text/html"
        width="200"
        height="175"
        src={mealLink}
      />
      <p className="videoFoodName">{mealName}</p>
    </div>
  );
}

export default Sidevideo;

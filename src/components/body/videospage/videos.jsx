import React from "react";
import "../../css/videos.css";
import Video from "../../sidebar/sidevideo";

function Videos() {
  return (
    <div className="videosContainer">
      <h4 className="videosHeader">Cooking Videos Gallery</h4>
      <div className="videos">
        <Video pageUse={"videos"} />
        <Video pageUse={"videos"} />
        <Video pageUse={"videos"} />

        <Video pageUse={"videos"} />
        <Video pageUse={"videos"} />
        <Video pageUse={"videos"} />

        <Video pageUse={"videos"} />
        <Video pageUse={"videos"} />
        <Video pageUse={"videos"} />
      </div>
    </div>
  );
}

export default Videos;

import React from "react";
import "../css/socialmedia.css";

function SocialMedia() {
  return (
    <div className="sociallinks">
      <h4>Get Updates</h4>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-facebook-square"></i> Facebook
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter-square"></i> Twitter
      </a>
      <a
        href="https://www.pinterest.com/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-pinterest-square"></i> Pinterest
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-instagram"></i> Instagram
      </a>
    </div>
  );
}

export default SocialMedia;

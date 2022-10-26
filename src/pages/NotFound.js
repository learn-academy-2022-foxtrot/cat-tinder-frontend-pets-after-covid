import React from "react";
import "../not-found.css";
const NotFound = () => {
  return (
    <>
      <div class="not-found-container">
        <h1>Page Not Found</h1>
        <p class="zoom-area"></p>
        <section class="error-container">
          <span class="four">
            <span class="screen-reader-text">4</span>
          </span>
          <span class="zero">
            <span class="screen-reader-text">0</span>
          </span>
          <span class="four">
            <span class="screen-reader-text">4</span>
          </span>
        </section>
        <div class="link-container">
          <a target="_blank" href="/" class="more-link">
            Return to Home?
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;

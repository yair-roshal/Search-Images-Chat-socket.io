import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";

export  function Loading() {
  return (
    <div className="loading">
      <h4>houses data loading...</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
}

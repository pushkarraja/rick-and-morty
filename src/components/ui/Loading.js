import React from "react";
import loader from "../../img/morty.gif";

const Loading = () => {
  return (
    <div className="center">
      <img className="loading-morty" src={loader}></img>
    </div>
  );
};

export default Loading;

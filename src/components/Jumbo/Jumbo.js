import React from "react";
import "./Jumbo.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Jumbo = () => (
  <div className="jumbotron text-center">
  	<h1>Clicky Game</h1>
  	<h2>Click on an image to earn points, but don't click on any more than once!</h2>
  </div>
);

export default Jumbo;
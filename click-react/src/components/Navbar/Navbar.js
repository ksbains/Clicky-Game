import React from "react";
import "./Navbar.css";
// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (
  <nav className="navbar ">
    <ul>
      <li className="brand "><a href="">Clicky Game</a></li>
      <li> You Guessed Correctly!</li>
      <li> score:{5} | Top score: {6} </li>
    </ul>
</nav>
);

export default Navbar;
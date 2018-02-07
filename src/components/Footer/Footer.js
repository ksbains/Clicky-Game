import React from "react";
import "./Footer.css";
// By importing the Header.css file, it is added to the DOM whenever this component loads

const Footer = () => (
  <footer className="footer">
    <div className="bottom">
    	Click Game!
    	<img
    		alt="react" 
    		src="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/react.svg?raw=true"
    	/> 
    </div>
  </footer>
);

export default Footer;
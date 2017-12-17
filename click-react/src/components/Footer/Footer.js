import React from "react";
import "./Footer.css";
// By importing the Header.css file, it is added to the DOM whenever this component loads

const Footer = () => (
  <footer className="footer">
    <div className="bottom">
    	Clicky Game!
    	<img alt="react" src="../../public/assets/images/react.svg"/> 
    </div>
  </footer>
);

export default Footer;
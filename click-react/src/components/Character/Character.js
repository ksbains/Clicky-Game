import React from "react";
import "./Character.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Character = (props) => {
return (
	<div 
	  	role="img"
	  	clicked="false"
	  	aria-label="click item" 
	  	className="click-item"
	  	//onClick={() =>{
	  	//this.props.clicked = false;
	  	//props.random()}
	  	onClick={props.random}
	  	style={
	  		{
	  			backgroundImage: `url(${props.url})`
	  		}
	  	}> 
	</div>
	);
}

export default Character;

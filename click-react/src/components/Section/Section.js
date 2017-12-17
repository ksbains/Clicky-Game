import React from "react";
import Character from '../Character/Character.js';
import "./Section.css";
/*<Character url="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Beth.png?raw=true"/>
<Character url="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/bird.jpg?raw=true"/>
<Character url="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/evilMorty.png?raw=true"/>
<Character url="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/giantHead.png?raw=true"/>
<Character url="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/goldenfold.jpg?raw=true"/>
<Character url="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/jerry.jpg?raw=true"/>
<Character url="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Jessica.png?raw=true"/>
<Character url="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Meeseeks.png?raw=true"/>
<Character url="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/poopybutthole.jpg?raw=true"/>
<Character url="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/rick.jpg?raw=true"/>
<Character url="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/summer.jpg?raw=true"/>
<Character url="https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Morty.JPG?raw=true"/>
*/
const Section =(props) =>{
	return (
		<section className="container">
			{props.urls.map(url => {
				return (
					<Character key= {url} url={url} random={props.random}/>
				);
			})}
		</section>
	);
}

export default Section;


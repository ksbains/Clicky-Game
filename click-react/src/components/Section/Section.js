import React from "react";
import Character from '../Character/Character.js';
import "./Section.css";

class Section extends React.Component {

	state = {
		urls: ["https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Beth.png?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/bird.jpg?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/evilMorty.png?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/giantHead.png?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/goldenfold.jpg?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/jerry.jpg?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Jessica.png?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Meeseeks.png?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/poopybutthole.jpg?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/rick.jpg?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/summer.jpg?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Morty.JPG?raw=true"]
	};

	random = (event) => {
		let tmpUrls = this.state.urls;
	    for (let i = tmpUrls.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = tmpUrls[i];
	        tmpUrls[i] = tmpUrls[j];
	        tmpUrls[j] = temp;
	    }	
	    console.log(tmpUrls);
	    
	    this.setState({
	    	urls: tmpUrls
	    });
	};	
	
	shuffle = () => {
		this.random();
		return this.state.urls.map(url => {
			return (
				<Character key= {url} url={url} random={this.random} />
			);
		})
	};

	render = () => {
		return (
			<section className="container">
				{this.state.urls.map(url => {
					return (
						<Character key= {url} url={url} random={this.random} />
					);
				})
			}
			</section>
		);
	};
}
export default Section;


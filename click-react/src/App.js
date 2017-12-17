import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Section from './components/Section/Section.js';
import Jumbo from './components/Jumbo/Jumbo.js';
import Footer from './components/Footer/Footer.js';
class App extends Component {
	state = {
		urls: ["https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Beth.png?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/bird.jpg?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/evilMorty.png?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/giantHead.png?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/goldenfold.jpg?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/jerry.jpg?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Jessica.png?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Meeseeks.png?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/poopybutthole.jpg?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/rick.jpg?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/summer.jpg?raw=true","https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Morty.JPG?raw=true"]
	};

	random = event => {
		let array = this.state.urls;
	    for (let i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	         var temp = array[i];
	         array[i] = array[j];
	         array[j] = temp;
	    }	
	    console.log(array);
	}
  render() {
    return (
		<div>
		<Navbar/>
		<Jumbo/>
		<Section urls={this.state.urls} random={this.random}/>
		<Footer/>
		</div>
    );
  }
}

export default App;

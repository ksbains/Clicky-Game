import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Section from './components/Section/Section.js';
import Jumbo from './components/Jumbo/Jumbo.js';
import Footer from './components/Footer/Footer.js';
class App extends Component {
	state = {
		tiles: [
		{
			url: "https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Beth.png?raw=true",
			count: 0
		},
		{
			url: "https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/bird.jpg?raw=true",
			count: 0
		},
		{
			url: "https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/evilMorty.png?raw=true",
			count: 0
		},
		{
			url: "https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/giantHead.png?raw=true",
			count: 0
		},
		{
			url: "https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/goldenfold.jpg?raw=true",
			count: 0
		},
		{
			url: "https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/jerry.jpg?raw=true",
			count: 0
		},
		{
			url: "https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Jessica.png?raw=true",
			count: 0
		},
		{
			url: "https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Meeseeks.png?raw=true",
			count:0
		},
		{
			url: "https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/poopybutthole.jpg?raw=true",
			count: 0
		},
		{
			url: "https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/rick.jpg?raw=true",
			count: 0
		},
		{
			url: "https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/summer.jpg?raw=true",
			count: 0
		},
		{
			url: "https://github.com/ksbains/Clicky-Game/blob/master/click-react/src/images/Morty.JPG?raw=true",
			count: 0
		}],
		score: 0,
		topScore: 0,
		message: "Click an image to begin!"
	};

	gameOver = () => {
		let temp = this.state.tiles;
		for (var i = 0; i < temp.length; i++) {
			temp[i].count = 0;
		}
		return {
			tiles: temp,
			message: "Click an image to begin!"
		}
	};

	random = (tile, index) => {
		let count = tile.count;
		let nextTiles;
		let nextScore = this.state.score;
		let nextMessage;
		console.log("the tile is ", tile, 'index is', index);
		if(count){
			//this is if the count is 1 and has already been clicked. 
			nextScore = 0;
			let nextValues = this.gameOver();
			nextMessage = nextValues.message;
			nextTiles = nextValues.tiles;
		 }else {
		 	nextTiles = this.state.tiles.slice(0)
		 	nextTiles[index].count++
		 	nextScore++
		 	nextMessage = "You guessed Correctly!" 
		 	// this.stateiles[index].count++;
		 	// console.log("the count for the obj has incremneted", this.state.tiles[index]);
		 	// this.setState({
		 	// 	tiles: nextTiles,
		 	// 	score: this.state.score + 1,
		 	// 	message: "You guessed Correctly!"
		 	// })
		 // 	if(this.state.score >= this.state.topScore){
			// 	this.setState({
			// 		topScore: ++this.state.score
			// 	});
			// }
		 }	
		 let tmpUrls = nextTiles || this.state.tiles.slice(0);
		    for (let i = tmpUrls.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = tmpUrls[i];
		        tmpUrls[i] = tmpUrls[j];
		        tmpUrls[j] = temp;
		    }
		    console.log('next message', nextMessage)
	    this.setState({
	    	tiles: tmpUrls,
	    	score: nextScore,
	    	message: nextMessage
	    });
	};	
	
  render() {
    return (
		<div>
		<Navbar
			score={this.state.score}
			topScore={this.state.topScore}
			message={this.state.message}
			/>
		<Jumbo/>
		<Section
			tiles={this.state.tiles}
			random={this.random}
		/>
		<Footer/>
		</div>
    );
  }
}

export default App;

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
			url: "/images/Beth.png",
			count: 0
		},
		{
			url: "/images/bird.jpg",
			count: 0
		},
		{
			url: "/images/evilMorty.png",
			count: 0
		},
		{
			url: "/images/giantHead.png",
			count: 0
		},
		{
			url: "/images/goldenfold.jpg",
			count: 0
		},
		{
			url: "/images/jerry.jpg",
			count: 0
		},
		{
			url: "/images/Jessica.png",
			count: 0
		},
		{
			url: "/images/Meeseeks.png",
			count:0
		},
		{
			url: "/images/poopybutthole.jpg",
			count: 0
		},
		{
			url: "/images/rick.jpg",
			count: 0
		},
		{
			url: "/images/summer.jpg",
			count: 0
		},
		{
			url: "/images/Morty.JPG",
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
		 	if(nextScore == 12){
		 		alert("You have won the game!, click on any character to Reset the score and play again!!")
		 	}
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
		</div>
    );
  }
}

export default App;

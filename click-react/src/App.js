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
		this.setState({
			tiles: temp,
			message: "Click an image to begin!"
		});
	};

	random = (event) => {
		let count = event.target.count;
		console.log("The count is" + count);
		console.log("it is of type", typeof count);
		if(count){
			//this is if the count is 1 and has already been clicked. 
			this.setState({
				score: 0,
				message: "You guessed Incorrectly!"
			});
			this.gameOver();
		 }else {
		 	this.state.score++;
		 	event.target.count++;
		 	this.setState({
		 		score: this.state.score,
		 		message: "You guessed Correctly!"
		 	})
		 	if(this.state.score > this.state.topScore){
				this.setState({
					topScore: this.state.score
				});
			}
		 }	
		 let tmpUrls = this.state.tiles;
		    for (let i = tmpUrls.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = tmpUrls[i];
		        tmpUrls[i] = tmpUrls[j];
		        tmpUrls[j] = temp;
		    }

	    this.setState({
	    	tiles: tmpUrls
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

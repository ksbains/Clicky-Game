import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Section from './components/Section/Section.js';
import Jumbo from './components/Jumbo/Jumbo.js';
import Footer from './components/Footer/Footer.js';
class App extends Component {

  render() {
    return (
		<div>
		<Navbar/>
		<Jumbo/>
		<Section/>
		<Footer/>
		</div>
    );
  }
}

export default App;

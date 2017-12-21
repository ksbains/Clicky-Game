import React from "react";
import Character from '../Character/Character.js';
import "./Section.css";

const Section = props => {
	console.log('section about to render')
	return (
		<section className="container">
			{
				props.tiles.map((tile, index) => {
					return (
						<Character key= {tile.url} random={props.random} tile={tile} loc={index}/>
					);
				})
			}
		</section>
	);
}
export default Section;


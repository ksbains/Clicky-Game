import React from "react";
import Character from '../Character/Character.js';
import "./Section.css";

const Section = props => {
	return (
		<section className="container">
			{props.tiles.map(tile => {
				return (
					<Character key= {tile.url} url={tile.url} random={props.random} count={tile.count}/>
				);
			})}
		</section>
	);
}
export default Section;


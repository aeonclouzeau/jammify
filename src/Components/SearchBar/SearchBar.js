import React from "react";

export class SearchBar extends React.Component {
	render() {
		return (
			<div class="SearchBar">
				<input placeholder="Enter a song, album or artist" />
				<button class="SearchButton">SEARCH</button>
			</div>
		);
	}
}

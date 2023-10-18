import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.search = this.search.bind(this);
	}

	search() {
		this.props.onSearch(this.state.term);
	}

	render() {
		return (
			<div className="SearchBar">
				<input placeholder="Enter a song, album or artist" />
				<button className="SearchButton">SEARCH</button>
			</div>
		);
	}
}

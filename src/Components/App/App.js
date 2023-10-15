import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			SearchResults: [
				{
					name: "Example Track Name",
					artist: "Example artist",
					album: "Example album",
					id: 1,
				},
				{
					name: "Example Track Name 2",
					artist: "Example artist 2",
					album: "Example album 2",
					id: 2,
				},
			],
		};
	}

	render() {
		return (
			<div>
				<h1>
					Jamm<span className="highlight">ify</span>
				</h1>
				<div className="App">
					{/* searchbar component */}
					<SearchBar />
					<div className="App-playlist">
						{/* SearchBarResults component */}
						<SearchResults />
						{/* Playlist component */}
						<Playlist />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

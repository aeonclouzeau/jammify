import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

class App extends React.Component {
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

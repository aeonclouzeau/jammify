import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";

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
						{/* SearchbarResults component */}
						<SearchResults />
						{/* Playlist component */}
					</div>
				</div>
			</div>
		);
	}
}

export default App;

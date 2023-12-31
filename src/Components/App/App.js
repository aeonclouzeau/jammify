import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import "./App.css";
import { Spotify } from "../../util/Spotify";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [
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
			playlistName: "Example Playlist",
			playlistTracks: [
				{
					name: "Example Playlist Track Name",
					artist: "Example Playlist Track artist",
					album: "Example Playlist Track album",
					id: 3,
				},
				{
					name: "Example Playlist Track Name 4",
					artist: "Example Playlist Track artist 4",
					album: "Example Playlist Track album 4",
					id: 4,
				},
			],
		};

		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
		this.savePlaylist = this.savePlaylist.bind(this);
		this.search = this.search.bind(this);
	}

	addTrack(track) {
		// Use of Array.find method to search and compare ids
		const foundTrack = this.state.playlistTracks.find(
			(playlistTrack) => playlistTrack.id === track.id
		);
		// if there isn't a track with the same id, add the track to the playlist
		const newTrack = this.state.playlistTracks.concat(track);
		// test logic and make decition
		foundTrack
			? console.log("This track already exists")
			: this.setState({ playlistTracks: newTrack });
	}

	removeTrack(track) {
		const isPresent = this.state.playlistTracks.filter(
			(playlistTrack) => playlistTrack.id !== track.id
		);
		this.setState({ playlistTracks: isPresent });
	}

	updatePlaylistName(name) {
		this.setState({ playlistName: name });
	}

	savePlaylist() {
		const trackURIs = this.state.playlistTracks.map((tracks) => tracks.uri);
		const name = this.state.playlistName;
		Spotify.savePlaylistName(name, trackURIs).then(() => {
			this.setState({
				playlistName: "New Playlist",
				playlistTracks: [],
			});
		});
	}

	search(term) {
		Spotify.search(term).then((result) => {
			this.setState({ searchResults: result });
		});
		// console.log(term);
	}

	render() {
		return (
			<div>
				<h1>
					Jamm<span className="highlight">ify</span>
				</h1>
				<div className="App">
					{/* searchBar component */}
					<SearchBar onSearch={this.search} />

					<div className="App-playlist">
						{/* SearchResults component */}
						<SearchResults
							searchResults={this.state.searchResults}
							onAdd={this.addTrack}
						/>
						{/* Playlist component */}
						<Playlist
							playlistName={this.state.playlistName}
							playlistTracks={this.state.playlistTracks}
							onRemove={this.removeTrack}
							onNameChange={this.updatePlaylistName}
							onSave={this.savePlaylist}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

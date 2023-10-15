import React from "react";
import "./Playlist.css";

export class Playlist extends React.Component {
	render() {
		return (
			<div className="Playlist">
				<input defaultValue={"New Playlist"} />
				{/* add tracklist component */}
				<button class="Playlist-save">SAVE TO SPOTIFY</button>
			</div>
		);
	}
}

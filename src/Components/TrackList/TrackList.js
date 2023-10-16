import React from "react";
import { Track } from "../Track/Track";
import "./TrackList.css";

export class TrackList extends React.Component {
	render() {
		return (
			<div className="TrackList">
				{/* a map method that renders a set of Track components */}
				{this.props.tracks.map((track) => {
					return (
						<Track key={track.id} track={track} onAdd={this.props.onAdd} />
					);
				})}
			</div>
		);
	}
}

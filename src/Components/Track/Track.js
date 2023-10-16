import React from "react";
import "./Track.css";

export class Track extends React.Component {
	renderAction() {
		if (this.props.isRemoval) {
			return <button className="Track-action">-</button>;
		} else {
			return <button className="Track-action">+</button>;
		}
	}

	addTrack() {
		this.props.onAdd(this.props.track);
	}

	render() {
		return (
			<div className="Track">
				<div className="Track-information">
					{/* Track name */}
					<h3>{this.props.track.name}</h3>
					{/* track info */}
					<p>
						{this.props.track.artist} | {this.props.track.album}
					</p>
				</div>
				{/* call the render action */}
				{this.renderAction()}
			</div>
		);
	}
}

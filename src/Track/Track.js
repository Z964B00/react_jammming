import React from "react";

import "./Track.css";

const Track = (props) => {

    const addTrack = () => {
        console.log("Button clicked");
        props.onAdd(props.track)
      };

    const actionButton = () => {
        return (
            <button className="TrackAction" onClick={addTrack}>+</button>
        );
    };

    return (
        <div className="TrackEntry">
            <div className="TrackInfo">
                <h3 className="Track">{props.title} | {props.artist}</h3>
            </div>
            {actionButton()}
        </div>
    );
};

export default Track;
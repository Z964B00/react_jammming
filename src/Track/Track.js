import React from "react";

import "./Track.css";

const Track = (props) => {
    return (
        <div className="TrackEntry">
            <h3 className="Track">{props.track} | {props.artist}</h3>
        </div>
    );
};

export default Track;
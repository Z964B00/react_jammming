import React from "react";
import Track from "../Track/Track";

import "./TrackList.css";

const TrackList = (props) => {

    if (!props.tracks) {
        return null;
    }

    return (
        <div className="TrackList">
            {props.tracks.map(track => (
                <Track
                    key={track.id}
                    track={track.name}
                    artist={track.artist}
                 />
            ))}
        </div>
    );
};

export default TrackList;
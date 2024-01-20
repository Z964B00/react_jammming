import React from "react";
import Track from "../Track/Track";

import "./TrackList.css";

const TrackList = (props) => {
    console.log("onAdd in TrackList:", typeof props.onAdd);

    if (!props.tracks) {
        return null;
    }

    return (
        <div className="TrackList">
            {props.tracks.map(track => (
                <Track
                    track={track}
                    key={track.id}
                    title={track.name}
                    artist={track.artist}
                    onAdd={props.onAdd}
                    isRemoval={props.isRemoval}
                    onRemove={props.onRemove}
                 />
            ))}
        </div>
    );
};

export default TrackList;
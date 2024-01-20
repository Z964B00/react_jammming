import React, { useCallback } from "react";
import TrackList from "../TrackList/TrackList";

import "./PlayList.css";

const PlayList= (props) => {
    const handleTitleChange = useCallback(
        (event) => {
            props.onTitleChange(event.target.value);
        },
        [props.onTitleChange]
    );

    return (
        <div className="Playlist">
            <div className="PlaylistTitle">
                <input 
                    type="text"
                    placeholder="My Playlist Title"
                    onTitleChange={handleTitleChange}
                    />
            </div>
            <TrackList 
                tracks={props.playlistTracks} 
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className="SaveButton">Save to Spotify</button>
        </div>
    );
};

export default PlayList;
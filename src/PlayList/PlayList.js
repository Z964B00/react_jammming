import React from "react";
import TrackList from "../TrackList/TrackList";

import "./PlayList.css";

const PlayList= () => {
    return (
        <div className="Playlist">
            <h2>Playlist</h2>
            <TrackList />
            <button>Save to Spotify</button>
        </div>
    );
};

export default PlayList;
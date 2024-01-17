import React, { useState } from "react";
import TrackList from "../TrackList/TrackList";

import "./PlayList.css";

const PlayList= (props) => {

    const [ playlistTitle, setPlaylistTitle ] = useState("");
    const [ playlistTitleColor, setPlaylistTitleColor ] = useState("grey")

    const [ playlistTracks, setPlaylistTracks ] = useState([
        { name: "Track 4", artist: "Artist 4", album: "Album 4", id: 4 },
        { name: "Track 5", artist: "Artist 5", album: "Album 5", id: 5 },
        { name: "Track 6", artist: "Artist 6", album: "Album 6", id: 6 }
    ]);

    const handleTitleChange = (event) => {
        const newTitle = event.target.value;
        setPlaylistTitle(newTitle);
        setPlaylistTitleColor(newTitle ? "black" : "grey");
    };

    const handleInputClick = () => {
        if (playlistTitle === "") {
            setPlaylistTitle("");
            setPlaylistTitleColor("black");
        }
    }

    return (
        <div className="Playlist">
            <div class="PlaylistTitle">
                <input 
                    type="text"
                    placeholder="My Playlist Title"
                    value={playlistTitle}
                    onChange={handleTitleChange}
                    onClick={handleInputClick}
                    style={{ color:playlistTitleColor }} />
            </div>
            <TrackList tracks={playlistTracks} />
            <button>Save to Spotify</button>
        </div>
    );
};

export default PlayList;
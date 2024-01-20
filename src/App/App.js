import React, { useState, useCallback } from "react";
import './App.css';

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

function App() {
  const [ searchResults, setSearchResults ] = useState([
    { name: "Track 1", artist: "Artist 1", album: "Album 1", id: 1 },
    { name: "Track 2", artist: "Artist 2", album: "Album 2", id: 2 },
    { name: "Track 3", artist: "Artist 3", album: "Album 3", id: 3 },
    { name: "Track 4", artist: "Artist 4", album: "Album 4", id: 4 },
    { name: "Track 5", artist: "Artist 5", album: "Album 5", id: 5 }
  ]);

  const [ playlistTitle, setPlaylistTitle ] = useState("");
  const [ playlistTitleColor, setPlaylistTitleColor ] = useState("grey")

  const [ playlistTracks, setPlaylistTracks ] = useState([
    { name: "Track 4", artist: "Artist 4", album: "Album 4", id: 4 },
    { name: "Track 5", artist: "Artist 5", album: "Album 5", id: 5 },
    { name: "Track 6", artist: "Artist 6", album: "Album 6", id: 6 }
  ]);


  const updateSearchResults = (newResults) => {
    setSearchResults(newResults);
  };

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

  const addToPlaylist = useCallback((track) => {
    if(!playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  }, [playlistTracks]);


  const removeFromPlaylist = useCallback((track) => {
    setPlaylistTracks((prevTracks) => 
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  return (
    <div className="App">
      <h1>Spotify Playlist Constructor</h1>
      <div>
        <SearchBar />
      </div>
      <div className="ResultsandPlaylist">
        <SearchResults searchResults={searchResults} onAdd={addToPlaylist} />
        <PlayList
          playlistTitle={playlistTitle}
          playlistTracks={playlistTracks}
          playlistTitleColor={playlistTitleColor}
          onTitleChange={handleTitleChange}
          onClick={handleInputClick}
          onRemove={removeFromPlaylist}
        />
      </div>
    </div>
  );
}

export default App;

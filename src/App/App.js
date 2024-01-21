import React, { useState, useCallback } from "react";
import './App.css';

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

function App() {
  const [ searchResults, setSearchResults ] = useState([
    { name: "Track 1", artist: "Artist 1", album: "Album 1", id: 1, uri:"spotify:track:1rqhFgbbKwnb9MLmUQDhG1" },
    { name: "Track 2", artist: "Artist 2", album: "Album 2", id: 2, uri:"spotify:track:2rqhFgbbKwnb9MLmUQDhG2" },
    { name: "Track 3", artist: "Artist 3", album: "Album 3", id: 3, uri:"spotify:track:3rqhFgbbKwnb9MLmUQDhG3" },
    { name: "Track 4", artist: "Artist 4", album: "Album 4", id: 4, uri:"spotify:track:4rqhFgbbKwnb9MLmUQDhG4" },
    { name: "Track 5", artist: "Artist 5", album: "Album 5", id: 5, uri:"spotify:track:5rqhFgbbKwnb9MLmUQDhG5" }
  ]);

  const [ playlistTitle, setPlaylistTitle ] = useState("");
  const [ playlistTitleColor, setPlaylistTitleColor ] = useState("grey")

  const [ playlistTracks, setPlaylistTracks ] = useState([
    { name: "Track 6", artist: "Artist 6", album: "Album 6", id: 6, uri:"spotify:track:6rqhFgbbKwnb9MLmUQDhG6" },
    { name: "Track 7", artist: "Artist 7", album: "Album 7", id: 7, uri:"spotify:track:7rqhFgbbKwnb9MLmUQDhG7" },
    { name: "Track 8", artist: "Artist 8", album: "Album 8", id: 8, uri:"spotify:track:8rqhFgbbKwnb9MLmUQDhG8" }
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

  const savePlaylist = useCallback((track) => {
    const trackUris = playlistTracks.map((track) => track.uri);
    console.log(trackUris);
  },
  [playlistTitle, playlistTracks]);

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
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;

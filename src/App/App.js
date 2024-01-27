import React, { useState, useCallback } from "react";
import './App.css';

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";
import Spotify from "../util/Spotify";

function App() {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistTitle, setPlaylistTitle ] = useState("");
  const [ playlistTitleColor, setPlaylistTitleColor ] = useState("grey")
  const [ playlistTracks, setPlaylistTracks ] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const updateSearchResults = (newResults) => {
    setSearchResults(newResults);
  };

  const handleTitleChange = useCallback((title) => {
    setPlaylistTitle(title);
    setPlaylistTitleColor(title ? "black" : "grey");
  }, []);
  
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

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistTitle, trackUris).then(() => {
      setPlaylistTitle("");
      setPlaylistTracks([]);
    });
  }, [playlistTitle, playlistTracks])

  return (
    <div className="App">
      <h1>Spotify Playlist Constructor</h1>
      <div>
        <SearchBar onSearch={search} />
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

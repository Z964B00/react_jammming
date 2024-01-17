import React, { useState } from "react";

import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

const SearchResults = () => {
    const [ searchResults, setSearchResults ] = useState([
        { name: "Track 1", artist: "Artist 1", album: "Album 1", id: 1 },
        { name: "Track 2", artist: "Artist 2", album: "Album 2", id: 2 },
        { name: "Track 3", artist: "Artist 3", album: "Album 3", id: 3 },
        { name: "Track 4", artist: "Artist 4", album: "Album 4", id: 4 },
        { name: "Track 5", artist: "Artist 5", album: "Album 5", id: 5 }
    ]);

    const updateSearchResults = (newResults) => {
        setSearchResults(newResults);
    };

    return (
     <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={searchResults} updateSearchResults={updateSearchResults} />
     </div>  
    );
};

export default SearchResults;
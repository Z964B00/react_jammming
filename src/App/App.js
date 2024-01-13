import './App.css';

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

function App() {
  return (
    <div className="App">
      <h1>Spotify Playlist Constructor</h1>
      <div>
        <SearchBar />
      </div>
      <div className="ResultsandPlaylist">
        <SearchResults />
        <PlayList/>
      </div>
    </div>
  );
}

export default App;

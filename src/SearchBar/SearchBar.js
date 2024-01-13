import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <input placeholder="What would you like to listen to?"></input>
            <button className="SearchButton">Search</button>
        </div>
    );
};

export default SearchBar;
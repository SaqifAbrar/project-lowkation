import React, { Component } from "react";
import SearchBody from "./searchBody";
import SearchBar from "./searchBar";

class Search extends Component {
    render() {
        return (
            <div className="search-body-container">
                <SearchBar />
            </div>
        );
    }
}

export default Search;

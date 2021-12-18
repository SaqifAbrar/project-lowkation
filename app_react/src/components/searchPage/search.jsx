import React, { Component } from "react";
import SearchBody from "./searchBody";
import SearchBar from "./searchBar";
import SearchResults from "../searchResultsPage/searchResults";

class Search extends Component {
    render() {
        return (
            <div className="search-body-container">
                <SearchBar />
                <SearchBody />
            </div>
        );
    }
}

export default Search;

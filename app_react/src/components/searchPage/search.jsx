import React, { Component } from "react";
import SearchBody from "./searchBody";
import SearchResults from "../searchResultsPage/searchResults";

class Search extends Component {
    render() {
        return (
            <div className="search-body-container">
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
                <SearchBody />
            </div>
        );
    }
}

export default Search;

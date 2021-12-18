import React, { Component } from "react";
import SearchResultsRow from "./searchResultsRow";

class SearchResultsBody extends Component {
    constructor() {
        super();
        this.state = {
            locations: [],
        };
    }

    render() {
        const { locations } = this.state;
        return (
            <div className="searchResults-body-container">
                <SearchResultsRow locations={locations} label={"results"} />
            </div>
        );
    }
}

export default SearchResultsBody;

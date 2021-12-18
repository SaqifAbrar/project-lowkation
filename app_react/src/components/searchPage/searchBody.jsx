import React, { Component } from "react";
import SearchCard from "./searchCard";
import axios from "axios";

class SearchBody extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
        };
    }

    render() {
        const { categories } = this.state;
        return (
            <div className="search-body-container">
                <SearchCard categories={categories} label={"Cafe"} />
                <SearchCard categories={categories} label={"Bridge"} />
                <SearchCard categories={categories} label={"Abandoned"} />
                <SearchCard categories={categories} label={"Night City"} />
                <SearchCard categories={categories} label={"Restaurant"} />
                <SearchCard categories={categories} label={"Picnic"} />
                <SearchCard categories={categories} label={"Forest"} />
                <SearchCard categories={categories} label={"Castles"} />
                <SearchCard categories={categories} label={"Garden"} />
                <SearchCard categories={categories} label={"Fountain"} />
                <SearchCard categories={categories} label={"Waterfall"} />
                <SearchCard categories={categories} label={"Nature"} />
                <SearchCard categories={categories} label={"Rooftop"} />
                <SearchCard categories={categories} label={"Stores"} />
                <SearchCard categories={categories} label={"Ruins"} />
            </div>
        );
    }
}

export default SearchBody;

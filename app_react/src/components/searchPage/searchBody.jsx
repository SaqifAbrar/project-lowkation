import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Locations from "../../temp/locations.json";
import Categories from "../../temp/categories.json";
import SearchTable from "./searchTable";
import TagTable from "./tagTable";
import axios from "axios";
import "./styles/searchBody.css";

function SearchBody() {
    const [field, setField] = useState("");
    const [tag, setTag] = useState("");
    const [locations, setLocations] = useState([]);
    const location = useLocation();
    console.log(location.pathname);

    useEffect(() => {
        if (field.length !== 0 || tag.length !== 0) {
            console.log("calling endpoint");
            axios
                .get(`/api/locations/search/?input=${field}&tag=${tag}`)
                .then((res) => {
                    if (res.data) {
                        setLocations(res.data);
                    }
                });
        }
    });

    return (
        <div className="search-body-container">
            <form className="d-flex">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search for cafes, abandoned buildings, hidden nature spots, and more!"
                    aria-label="Search"
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                />

                <button
                    className="btn-success"
                    type="submit"
                    label="input"
                    onClick={() => setTag("hello")}
                >
                    Explore!
                </button>
            </form>
            {!locations && <SearchTable locations={Locations} />}
            {!tag && <TagTable onChange={setTag} categories={Categories} />}
        </div>
    );
}

export default SearchBody;

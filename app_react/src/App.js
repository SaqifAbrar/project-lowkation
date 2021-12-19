import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navbar";
import FootBar from "./components/footbar";
import Landing from "./components/homePage/landing";
import Search from "./components/searchPage/search";
import LocationPage from "./components/locationPage/locationPage";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/home" element={<Landing />} />
                <Route path="/search" element={<Search />} />
                <Route path="/location" element={<LocationPage />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
            <FootBar />
        </div>
    );
}

export default App;

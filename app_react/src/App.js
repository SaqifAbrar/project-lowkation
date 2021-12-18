import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import FootBar from "./components/footbar";
import Location from "./components/location";
import Landing from "./components/homePage/landing";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/home" element={<Landing />} />
            </Routes>
            <FootBar />
        </div>
    );
}

export default App;

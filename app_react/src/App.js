import React from "react";
import { Routes, Route } from "react-router-dom";
import Location from "./components/location";
import Landing from "./components/homePage/landing";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/home" element={<Landing />} />
            </Routes>
        </div>
    );
}

export default App;

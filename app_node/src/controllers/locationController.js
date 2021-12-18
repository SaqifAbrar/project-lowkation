const express = require("express");
const locationData = require("../models/locations");

const locations = (req, res) => {
    const data = locationData;
    console.log("sending data");
    res.send(data);
};

const searchLocations = (req, res) => {
    const search = req.query || req.body;
    const field = search.input;

    const data = locationData.filter((location) => location.name === field);

    res.send(data);
};

module.exports = {
    locations,
    searchLocations,
};

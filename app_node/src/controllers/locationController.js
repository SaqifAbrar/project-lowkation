const express = require("express");
const locationData = require("../models/locations");
const firestoreClient = require("../../firestoreClient");

const locations = async (req, res) => {
    let realtimeLocation = {};

    const data = await firestoreClient().then((object) => {
        realtimeLocation = object;
    });

    console.log("sending data");
    res.send(realtimeLocation);
};

const searchLocations = (req, res) => {
    const search = req.query || req.body;
    const field = search.input;

    const data = locationData.filter((location) => location.name === field);

    res.send(data);
};

module.exports = {
    locations,
};

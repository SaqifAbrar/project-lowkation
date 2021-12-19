const express = require("express");
const locationData = require("../models/locations");
const firestoreClient = require("../../firestoreClient");

const locations = async (req, res) => {
    let realtimeLocation = {};

    const data = await firestoreClient().then((object) => {
        realtimeLocation = object;
    });

    let realtimeLocation = {}

    const data = await firestoreClient.getAllLocationsNoRank()
        .then((object) => {
            realtimeLocation = object
        })

    res.send(realtimeLocation);
};

const searchLocations = (req, res) => {
    const search = req.query || req.body;
    const field = search.input;
    // console.log(`HELLLLLLO ${search}`)

    // const data = locationData.filter((location) => location.name === field);
    const data = firestoreClient.searchBasedOffName(field)

    console.log("sending data");
    res.send(data);
};

module.exports = {
    locations,
    searchLocations
};

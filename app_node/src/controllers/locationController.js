const express = require("express");
const locationData = require("../models/locations");
const firestoreClient = require("../../firestoreClient")

const locations = async (req, res) => {

    let realtimeLocation = {}
     
    const data = await firestoreClient()
    .then((object) => {
        realtimeLocation = object
    })
        
        
    console.log("sending data");
    res.send(realtimeLocation); 
};

module.exports = {
    locations
};

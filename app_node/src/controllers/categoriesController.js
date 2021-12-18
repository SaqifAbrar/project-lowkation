const express = require("express");
const locationData = require("../models/locations");

const locations = (req, res) => {
    const data = locationData;
    console.log("sending data");
    res.send(data);
};

module.exports = {
    locations,
};

const express = require("express");
const users = require("../controllers/users");
const categories = require("../controllers/categories");
const locations = require("../controllers/locations");

module.exports = function (app) {
    console.log("test");
    app.use(express.json());
    app.use("/users", users);
    app.use("/categories", categories);
    app.use("/locations", locations);
};



const express = require("express");
const users = require("../controllers/users");
const categories = require("../controllers/users");
const locations = require("../controllers/users");

module.exports = function (app) {
    app.use(express.json());
    app.use("/users", users);
    app.use("/categories", categories);
    app.use("/locations", locations);
};

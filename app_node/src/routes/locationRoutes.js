const express = require("express");
const {
    locations,
    searchLocations,
} = require("../controllers/locationController");

const router = express.Router();

router.get("/", locations);

router.get("/search/", searchLocations);

module.exports = router;

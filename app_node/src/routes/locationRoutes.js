const express = require("express");
const { locations } = require("../controllers/locationController");

const router = express.Router();

router.get("/", locations);

module.exports = router;

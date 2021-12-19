const express = require("express");
const dotenv = require("dotenv");
const app = express();
// const Locations = require('./firestoreClient')
const router = require("./src/routes/locationRoutes");

require("dotenv").config();
app.use(express.json());

// location routes
app.use("/api/locations", router);

const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log(`Project-Lowkey server is listening on port ${port}`)
);

const express = require("express");
const dotenv = require("dotenv");
const app = express();
const locationRoutes = require("./src/routes/locationRoutes");

// location routes
app.use("/api/locations", locationRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log(`Project-Lowkey server is listening on port ${port}`)
);

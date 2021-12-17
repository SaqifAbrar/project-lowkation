const express = require("express");
const dotenv = require("dotenv");

const app = express();

app.get("/api", (req, res) => {
    const locations = [
        {
            id: 1,
            name: "Reynolds Building",
            location: "123 Alumni Walk",
        },
        {
            id: 2,
            name: "Reynolds Building",
            location: "123 Alumni Walk",
        },
        {
            id: 3,
            name: "Reynolds Building",
            location: "123 Alumni Walk",
        },
    ];

    console.log("sending data");

    res.send(locations);
});

app.listen(5000, () => "Project-Lowkey server is listening on port 5000");

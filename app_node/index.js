const express = require("express");
const dotenv = require("dotenv");
const app = express();

require("./src/routes/routes");

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
        {
            id: 4,
            name: "Reynolds Building",
            location: "123 Alumni Walk",
        },
        {
            id: 5,
            name: "Reynolds Building",
            location: "123 Alumni Walk",
        },
    ];

    console.log("sending data");

    res.send(locations);
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log(`Project-Lowkey server is listening on port ${port}`)
);

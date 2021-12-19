// const express = require("express");
// const dotenv = require("dotenv");
// const app = express();
// const Locations = require('./firestoreClient')
// const locationRoutes = require("./firestoreClient");

// app.use(express.json())

// // location routes
// app.use("/api/locations", locationRoutes);

// app.get("/api/test", async (req, res) => {
//     const data = {
//         id: 69,
//         name: "Reynolds Building",
//         address: "420 Alumni Walk",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim dictum sem, vitae gravida ante semper versatility.",
//         tags: ["Lorem", "Ipsum", "Dolar"],
//     };
//     await Locations.add(data);
//     res.send("bing bong");
// })

// const port = process.env.PORT || 5000;
// app.listen(port, () =>
//     console.log(`Project-Lowkey server is listening on port ${port}`)
// );

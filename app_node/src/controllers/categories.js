const express = require("express");
const router = express.Router();

router.get("/categories", async (req, res) => {
    //CALL BACKEND SERVICES TO COLLECT ALL LOCATION CATEGORIES
    res.send("you got categories");
});

const express = require("express");
const { route } = require("../app");
const router = express.Router();
const storeController = require("../controllers/storeController");

// Do work here
router.get("/", storeController.homePage);

module.exports = router;

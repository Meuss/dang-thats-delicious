const express = require("express");
const { route } = require("../app");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.get("/", storeController.homePage);

module.exports = router;

const express = require("express");
const { route } = require("../app");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.get("/", storeController.homePage);
router.get("/add", storeController.addStore);
router.post("/add", storeController.createStore);

module.exports = router;

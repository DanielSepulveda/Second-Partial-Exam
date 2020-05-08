const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const SPORTS_CONTROLLER = require("../controllers/sports");

const router = express.Router();

router.delete("/sports/delete", jsonParser, SPORTS_CONTROLLER.delete);

module.exports = router;

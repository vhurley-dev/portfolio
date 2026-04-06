const express = require("express");
const ServerHealthController = require("../controllers/serverHealth");

const router = express.Router();

router.get("", ServerHealthController.getServerHealth);

module.exports = router;

const express = require("express");
const { fraudController } = require("../controllers/fraudController");
const router = express.Router();
router.post("/fraud-report", fraudController);
module.exports = router;

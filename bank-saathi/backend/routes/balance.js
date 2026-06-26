const express = require("express");
const { balanceController } = require("../controllers/balanceController");
const router = express.Router();
router.get("/balance", balanceController);
module.exports = router;

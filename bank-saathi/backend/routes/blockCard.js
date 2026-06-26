const express = require("express");
const { blockCardController } = require("../controllers/blockCardController");
const router = express.Router();
router.post("/block-card", blockCardController);
module.exports = router;

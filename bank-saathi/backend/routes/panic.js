const express = require("express");
const { panicController } = require("../controllers/panicController");
const router = express.Router();
router.post("/panic-mode", panicController);
module.exports = router;

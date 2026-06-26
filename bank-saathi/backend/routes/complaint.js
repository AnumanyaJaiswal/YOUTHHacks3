const express = require("express");
const { complaintController } = require("../controllers/complaintController");
const router = express.Router();
router.post("/complaint", complaintController);
module.exports = router;

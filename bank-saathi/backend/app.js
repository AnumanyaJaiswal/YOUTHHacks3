const express = require("express");
const cors = require("cors");
const blockCardRoutes = require("./routes/blockCard");
const balanceRoutes = require("./routes/balance");
const complaintRoutes = require("./routes/complaint");
const panicRoutes = require("./routes/panic");
const fraudRoutes = require("./routes/fraud");
const app = express();
app.use(cors());
app.use(express.json());
app.use(blockCardRoutes);
app.use(balanceRoutes);
app.use(complaintRoutes);
app.use(panicRoutes);
app.use(fraudRoutes);
app.use((req, res) => {
  res.status(404).json({ success: false, data: {}, workflow: ["Endpoint not found."] });
});
module.exports = app;

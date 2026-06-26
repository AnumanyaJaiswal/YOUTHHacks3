const mockDatabase = require("../data/mockDatabase");
const balanceController = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: { balance: mockDatabase.balance },
      workflow: [
        "Fetching account information.",
        "Checking available balance.",
        `Your account balance is ₹${mockDatabase.balance}.`
      ]
    });
  } catch (error) {
    return res.status(500).json({ success: false, data: {}, workflow: [error.message] });
  }
};
module.exports = { balanceController };

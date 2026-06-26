const mockDatabase = require("../data/mockDatabase");
const generateComplaintId = require("../utils/generateComplaintId");
const panicController = async (req, res) => {
  try {
    mockDatabase.cardStatus = "BLOCKED";
    mockDatabase.upiStatus = "FROZEN";
    const complaintId = generateComplaintId();
    mockDatabase.complaints.push({ complaintId, issue: "Panic mode activated" });
    return res.status(200).json({
      success: true,
      data: {
        cardStatus: mockDatabase.cardStatus,
        upiStatus: mockDatabase.upiStatus
      },
      workflow: [
        "Emergency mode activated.",
        "Blocking linked cards.",
        "Freezing UPI services.",
        "Creating emergency complaint.",
        "Emergency actions completed."
      ]
    });
  } catch (error) {
    return res.status(500).json({ success: false, data: {}, workflow: [error.message] });
  }
};
module.exports = { panicController };

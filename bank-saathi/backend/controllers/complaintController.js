const mockDatabase = require("../data/mockDatabase");
const generateComplaintId = require("../utils/generateComplaintId");
const complaintController = async (req, res) => {
  try {
    const { issue } = req.body;
    if (!issue || typeof issue !== "string") {
      return res.status(400).json({
        success: false,
        data: {},
        workflow: ["Invalid issue payload provided."]
      });
    }
    const complaintId = generateComplaintId();
    mockDatabase.complaints.push({ complaintId, issue });
    return res.status(201).json({
      success: true,
      data: { complaintId },
      workflow: [
        "Understanding your issue.",
        "Creating complaint ticket.",
        "Complaint registered successfully."
      ]
    });
  } catch (error) {
    return res.status(500).json({ success: false, data: {}, workflow: [error.message] });
  }
};
module.exports = { complaintController };

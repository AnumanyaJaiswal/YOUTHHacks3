const mockDatabase = require("../data/mockDatabase");
const blockCardController = async (req, res) => {
  try {
    if (mockDatabase.cardStatus === "BLOCKED") {
      return res.status(200).json({
        success: true,
        data: { cardStatus: mockDatabase.cardStatus },
        workflow: [
          "I understood that you want to block your card.",
          "Verifying your identity.",
          "Identity verified.",
          "Your card is already blocked.",
          "No further action is needed."
        ]
      });
    }
    mockDatabase.cardStatus = "BLOCKED";
    return res.status(200).json({
      success: true,
      data: { cardStatus: mockDatabase.cardStatus },
      workflow: [
        "I understood that you want to block your card.",
        "Verifying your identity.",
        "Identity verified.",
        "Sending block request.",
        "Your card has been blocked successfully."
      ]
    });
  } catch (error) {
    return res.status(500).json({ success: false, data: {}, workflow: [error.message] });
  }
};
module.exports = { blockCardController };

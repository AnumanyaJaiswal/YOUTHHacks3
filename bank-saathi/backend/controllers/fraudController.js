const fraudController = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: { risk: "HIGH" },
      workflow: [
        "This appears to be a scam.",
        "Banks never ask for OTPs.",
        "Do not share your PIN or OTP.",
        "Please report suspicious calls immediately."
      ]
    });
  } catch (error) {
    return res.status(500).json({ success: false, data: {}, workflow: [error.message] });
  }
};
module.exports = { fraudController };

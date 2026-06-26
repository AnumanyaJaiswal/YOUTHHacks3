import { useState } from "react";
import { startListening } from "../services/speech";
import { detectIntent } from "../services/gemini";

function VoiceAssistant() {
  const [transcript, setTranscript] = useState("");
  const [status, setStatus] = useState("Ready");
  const [error, setError] = useState("");

  const handleMicClick = () => {
    setError("");

    startListening({
      onStart: () => {
        console.log("Listening...");
        setStatus("Listening...");
      },

      onResult: async (text) => {
        console.log("Transcript:", text);

        setTranscript(text);

        setStatus("Detecting Intent...");

        try {
          const result =
            await detectIntent(text);

          console.log(
            "Detected Intent:",
            result.intent
          );

          setStatus(
            `Intent: ${result.intent}`
          );

        } catch (error) {

          console.error(
            "Intent Detection Error:",
            error
          );

          setStatus(
            "Intent Detection Failed"
          );
        }
      },

      onError: (err) => {
        console.error("Speech Error:", err);

        setError(err);
        setStatus("Error");
      },

      onEnd: () => {
        console.log("Recognition ended");
      },
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "500px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1>🏦 Bank Saathi</h1>

        <p>
          <strong>Status:</strong> {status}
        </p>

        <button
          onClick={handleMicClick}
          style={{
            padding: "12px 20px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          🎤 Start Listening
        </button>

        <div style={{ marginTop: "20px" }}>
          <h3>Transcript</h3>

          <div
            style={{
              minHeight: "80px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            {transcript || "Speak something..."}
          </div>
        </div>

        {error && (
          <div
            style={{
              marginTop: "15px",
              color: "red",
            }}
          >
            Error: {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default VoiceAssistant;
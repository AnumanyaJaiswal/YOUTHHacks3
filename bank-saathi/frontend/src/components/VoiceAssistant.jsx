// VoiceAssistant.jsx

import { useState } from "react";

export default function VoiceAssistant({
  handleVoiceInput,
}) {
  const [status, setStatus] = useState("Ready");
  const isListening = status === "Listening...";
  const startListening = () => {
    setStatus("Listening...");

    const recognition =
      new window.webkitSpeechRecognition();

    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      const transcript =
        event.results[0][0].transcript;

      handleVoiceInput(transcript);

      setStatus("Processing...");
    };

    recognition.onend = () => {
      setStatus("Ready");
    };

    recognition.start();
  };

  return (
    <div className="relative overflow-hidden rounded-4xl bg-white border border-slate-200 shadow-[0_20px_80px_rgba(15,23,42,0.12)] p-10">

      {/* Decorative Background */}

      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />

      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-60" />

      <div className="relative z-10">

        {/* Assistant Badge */}

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
          AI Assistant Online
        </div>      

        <p className="mt-3 text-lg text-slate-600 max-w-xl mx-auto">
          Explainable Voice Banking Assistant for
          secure, accessible and trusted banking.
        </p>

        {/* AI Orb */}

        <div className="flex justify-center mt-10">

          <button
            onClick={startListening}
            className={`
              group
              relative
              flex
              items-center
              justify-center
              h-40
              w-40
              rounded-full
              text-white
              transition-all
              duration-300
              hover:scale-105
              ${
                isListening
                  ? "bg-linear-to-br from-green-500 to-emerald-500 shadow-[0_0_90px_rgba(34,197,94,0.7)]"
                  : "bg-linear-to-br from-blue-600 via-blue-500 to-cyan-400 shadow-[0_0_70px_rgba(59,130,          246,0.45)]"
              }
            `}
          >
            {/* Pulse Ring */}

            <span className="absolute inset-0 rounded-full border-4 border-blue-300 animate-ping opacity-30"></span>

            <span className="absolute inset-3 rounded-full border border-blue-200"></span>

            <span className="text-6xl group-hover:scale-110 transition">
              🎙️
            </span>
          </button>

        </div>

        {/* Status */}

        <div className="mt-8 flex justify-center">

          <div className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <p className="font-semibold text-slate-800">
              {status}
            </p>
          </div>

        </div>

        {/* Suggestions */}

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          <button className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            My card is lost
          </button>

          <button className="px-4 py-2 rounded-full bg-green-50 text-green-700 border border-green-100">
            Check my balance
          </button>

          <button className="px-4 py-2 rounded-full bg-orange-50 text-orange-700 border border-orange-100">
            Fraud Help
          </button>

        </div>

      </div>
    </div>
  );
}
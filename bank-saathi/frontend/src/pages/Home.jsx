import { useState } from "react";
import Navbar from "../components/Navbar";

import VoiceAssistant from "../components/VoiceAssistant";
import WorkflowTimeline from "../components/WorkflowTimeline";
import QuickActions from "../components/QuickActions";
import AccessibilityToggle from "../components/AccessibilityToggle";

import { blockCardFlow } from "../workflows/blockCard";
import { complaintFlow } from "../workflows/complaint";
import { fraudFlow } from "../workflows/fraud";
import { panicFlow } from "../workflows/panic";

export default function Home() {
  const [timeline, setTimeline] = useState([]);
  const [accessibility, setAccessibility] =
    useState(false);

  const speak = (text) => {
    const speech =
      new SpeechSynthesisUtterance(text);

    speech.lang = "en-IN";

    speechSynthesis.speak(speech);
  };

  const playFlow = async (flow) => {
    setTimeline([]);

    for (const step of flow) {
      setTimeline((prev) => [...prev, step]);

      speak(step);

      await new Promise((resolve) =>
        setTimeout(resolve, 1800)
      );
    }
  };

  const handleAction = (action) => {
    switch (action) {
      case "Block Card":
        playFlow(blockCardFlow);
        break;

      case "Check Balance":
        playFlow([
          "Fetching account information.",
          "Your account balance is ₹15,420.",
          "This amount is available for transactions."
        ]);
        break;

      case "File Complaint":
        playFlow(complaintFlow);
        break;

      case "Fraud Help":
        playFlow(fraudFlow);
        break;

      case "Panic Mode":
        playFlow(panicFlow);
        break;

      default:
        break;
    }
  };

  const handleVoiceInput = (text) => {
    const query = text.toLowerCase();

    if (
      query.includes("lost") ||
      query.includes("card") ||
      query.includes("kho")
    ) {
      handleAction("Block Card");
    } else if (
      query.includes("balance")
    ) {
      handleAction("Check Balance");
    } else if (
      query.includes("atm")
    ) {
      handleAction("File Complaint");
    } else if (
      query.includes("otp")
    ) {
      handleAction("Fraud Help");
    } else if (
      query.includes("stolen")
    ) {
      handleAction("Panic Mode");
    }
  };

  return (
  <div
    className={`min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50 ${
      accessibility ? "text-xl" : ""
    }`}
  >
    {/* Background Blur Effects */}
    <div className="fixed top-0 left-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
    <div className="fixed bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

    <div className="relative max-w-7xl mx-auto px-6 py-8">

      {/* Header */}
      <Navbar 
        accessibility={accessibility}
        setAccessibility={setAccessibility}
      />

      {/* Hero Section */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* AI Assistant */}

        <div className="lg:col-span-2">

          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl p-8">

            <div className="absolute top-0 right-0 h-48 w-48 bg-blue-100 rounded-full blur-3xl opacity-60" />

            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                AI Assistant Online
              </div>

              <h2 className="mt-5 text-5xl font-bold text-slate-900 leading-tight">
                Banking Assistance
                <br />
                Through Voice
              </h2>

              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                Speak naturally in English, Hindi, or Hinglish.
                Every action is explained step-by-step so users
                always understand what is happening.
              </p>

              <div className="mt-8">
                <VoiceAssistant
                  handleVoiceInput={handleVoiceInput}
                />
              </div>

            </div>

          </div>
        </div>

        {/* Side Info Cards */}

        <div className="space-y-5">

          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6">
            <h3 className="font-semibold text-slate-900">
              Supported Languages
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                English
              </span>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                Hindi
              </span>

              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                Hinglish
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6">
            <h3 className="font-semibold text-slate-900">
              Why Bank Saathi?
            </h3>

            <ul className="mt-4 space-y-3 text-slate-600">
              <li>✓ Explainable AI</li>
              <li>✓ Voice-first banking</li>
              <li>✓ Accessibility focused</li>
              <li>✓ Emergency assistance</li>
              <li>✓ Fraud protection</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-linear-to-r from-red-500 to-orange-500 text-white p-6 shadow-xl">
            <h3 className="font-bold text-lg">
              Panic Mode
            </h3>

            <p className="mt-2 text-white/90">
              Instantly block cards, freeze UPI and
              register an emergency complaint.
            </p>

            <button
              onClick={() => handleAction("Panic Mode")}
              className="mt-4 w-full bg-white text-red-600 font-semibold py-3 rounded-xl"
            >
              Activate Emergency
            </button>
          </div>

        </div>
      </div>

      {/* Quick Actions */}

      <section className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Quick Banking Actions
          </h2>

          <p className="text-slate-500">
            One tap assistance
          </p>
        </div>

        <QuickActions
          handleAction={handleAction}
        />
      </section>

      {/* Workflow */}

      <section className="mt-10">

        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-8">

          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Explainable Workflow
              </h2>

              <p className="text-slate-500">
                Every banking action is narrated and explained
              </p>
            </div>

            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              Live Updates
            </div>
          </div>

          <WorkflowTimeline timeline={timeline} />
        </div>

      </section>
    </div>
  </div>
);
}
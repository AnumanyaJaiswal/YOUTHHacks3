import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = getUser();

    if (!user) {
      alert("No account found.");
      return;
    }

    if (
      user.email === email &&
      user.password === password
    ) {
      alert("Login Successful");
      login(user)

      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center px-6">

        {/* Left Side */}

        <div className="hidden lg:block">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Trusted AI Banking
          </span>

          <h1 className="mt-6 text-6xl font-bold text-slate-900 leading-tight">
            Welcome to
            <br />
            <span className="text-blue-600">
              Bank Saathi
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8 max-w-lg">
            Secure banking made simple through voice.
            Get guided assistance for card blocking,
            balance enquiry, complaints and fraud protection.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">

            <div className="bg-white rounded-2xl p-5 shadow-lg border">
              <h3 className="font-semibold text-slate-800">
                🎤 Voice Banking
              </h3>

              <p className="text-sm mt-2 text-slate-500">
                Talk naturally in English, Hindi and Hinglish.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-lg border">
              <h3 className="font-semibold text-slate-800">
                🛡 Fraud Shield
              </h3>

              <p className="text-sm mt-2 text-slate-500">
                Stay protected from scams and phishing.
              </p>
            </div>

          </div>

        </div>

        {/* Login Card */}

        <div className="bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-4xl p-10 mt-5 mb-5">

          <div className="text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-3xl shadow-lg">
              🏦
            </div>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Sign In
            </h2>

            <p className="mt-3 text-slate-500">
              Continue to your Bank Saathi account
            </p>

          </div>

          <form className="mt-10 space-y-6" onSubmit={handleLogin}>

            <div>

              <label className="text-sm font-medium text-slate-600">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </div>

            <div>

              <label className="text-sm font-medium text-slate-600">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </div>

            <button
              className="w-full rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              type="submit"
            >
              Login
            </button>

          </form>

          <p className="mt-8 text-center text-slate-500">

            Don't have an account?

            <Link
              to="/signup"
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}
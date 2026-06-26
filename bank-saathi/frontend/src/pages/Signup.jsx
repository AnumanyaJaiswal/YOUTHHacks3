import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../utils/auth";

export default function Signup() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        accountNumber: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        saveUser(form);

        alert("Account created successfully!");

        navigate("/login");
    };


    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center relative overflow-hidden">

            {/* Background Blur */}
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cyan-200/30 blur-3xl" />

            <div className="relative w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center px-6 py-10">

                {/* Left Section */}

                <div className="hidden lg:flex items-center justify-center">
                    <div className="max-w-xl">


                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Secure Banking Begins Here
                        </span>

                        <h1 className="mt-6 text-6xl font-bold text-slate-900 leading-tight ">
                            Create your
                            <br />
                            <span className="text-blue-600">
                                Bank Saathi
                            </span>
                            <br />
                            account
                        </h1>

                        <p className="mt-6 text-lg text-slate-600 leading-8 max-w-lg">
                            Experience accessible, explainable and secure AI-powered
                            banking. Voice assistance, fraud protection and emergency
                            support—all in one place.
                        </p>

                        <div className="grid grid-cols-2 gap-5 mt-10">

                            <div className="bg-white rounded-2xl shadow-lg border p-5">
                                <h3 className="font-semibold text-slate-800">
                                    🔒 Secure Authentication
                                </h3>

                                <p className="text-sm text-slate-500 mt-2">
                                    Bank-grade security for every login.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg border p-5">
                                <h3 className="font-semibold text-slate-800">
                                    🎙 Voice Banking
                                </h3>

                                <p className="text-sm text-slate-500 mt-2">
                                    Banking in English, Hindi & Hinglish.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Signup Card */}

                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-4xl shadow-2xl p-10">

                    <div className="text-center">

                        <div className="w-20 h-20 mx-auto rounded-full bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                            BS
                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-slate-900">
                            Create Account
                        </h2>

                        <p className="mt-2 text-slate-500">
                            Join Bank Saathi today
                        </p>

                    </div>

                    <form className="mt-10 space-y-5" onSubmit={handleSubmit}>

                        <div>

                            <label className="block text-sm font-medium text-slate-600 mb-2">
                                Username
                            </label>

                            <input
                                type="text"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                placeholder="Choose a username"
                                className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                            />

                        </div>

                        <div>

                            <label className="block text-sm font-medium text-slate-600 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                            />

                        </div>

                        <div>

                            <label className="block text-sm font-medium text-slate-600 mb-2">
                                Account Number
                            </label>

                            <input
                                type="text"
                                name="accountNumber"
                                value={form.accountNumber}
                                onChange={handleChange}
                                placeholder="Enter your account number"
                                className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                            />

                        </div>

                        <div>

                            <label className="block text-sm font-medium text-slate-600 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                            />

                        </div>

                        <button
                            className="w-full mt-4 py-4 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                            type="submit"
                        >
                            Create Account
                        </button>

                    </form>

                    <p className="mt-8 text-center text-slate-500">

                        Already have an account?

                        <Link
                            to="/login"
                            className="ml-2 text-blue-600 font-semibold hover:underline"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}
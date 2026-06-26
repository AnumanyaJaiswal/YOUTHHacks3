import React from 'react'
import AccessibilityToggle from './AccessibilityToggle'
import { logout, getCurrentUser } from '../utils/auth'
import { useNavigate, Link } from 'react-router-dom'

function Navbar({ accessibility, setAccessibility }) {

    const navigate = useNavigate();
    const currentUser = getCurrentUser();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

            <div className="text-center md:text-left">

                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                    Bank Saathi
                </h1>

                <p className="text-slate-500 mt-2 text-sm sm:text-base">
                    Explainable Voice Banking Assistant
                </p>

            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">

                <AccessibilityToggle
                    accessibility={accessibility}
                    setAccessibility={setAccessibility}
                />

                {currentUser ? (
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

                        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow border w-full sm:w-auto justify-center sm:justify-start">

                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                {currentUser.username[0].toUpperCase()}
                            </div>

                            <div>
                                <p className="font-semibold text-slate-800">
                                    {currentUser.username}
                                </p>

                                <p className="text-xs text-slate-500">
                                    Logged In
                                </p>
                            </div>

                        </div>

                        <button
                            onClick={handleLogout}
                            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 shadow-lg transition"
                        >
                            Logout
                        </button>

                    </div>
                ) : (
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

                        <Link
                            to="/login"
                            className="w-full sm:w-auto text-center px-5 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="w-full sm:w-auto text-center px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition"
                        >
                            Sign Up
                        </Link>

                    </div>
                )}

            </div>

        </div>
    )
}

export default Navbar
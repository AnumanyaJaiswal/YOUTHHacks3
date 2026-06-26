import React from 'react'
import AccessibilityToggle from './AccessibilityToggle'
import { logout, getCurrentUser } from '../utils/auth'
import { useNavigate , Link } from 'react-router-dom'

function Navbar({ accessibility, setAccessibility }) {

    const navigate = useNavigate();
    const currentUser = getCurrentUser();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-between mb-10">

            <div>

                <h1 className="text-4xl font-bold text-slate-900">
                    Bank Saathi
                </h1>

                <p className="text-slate-500 mt-2">
                    Explainable Voice Banking Assistant
                </p>

            </div>

            <div className="flex items-center gap-4">

                <AccessibilityToggle
                    accessibility={accessibility}
                    setAccessibility={setAccessibility}
                />


                {currentUser ? (
                    <div className="flex items-center gap-4">

                        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow border">
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
                            className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 shadow-lg"
                        >
                            Logout
                        </button>

                    </div>
                ) : (
                    <>
                        <Link
                            to="/login"
                            className="px-5 py-2 rounded-xl border border-slate-300 hover:bg-slate-100"
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                        >
                            Sign Up
                        </Link>
                    </>
                )}

            </div>

        </div>
    )
}

export default Navbar

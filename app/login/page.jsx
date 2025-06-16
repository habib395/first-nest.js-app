
"use client";

import React from "react";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white dark:bg-[var(--background)] rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl">
        {/* Left Section (Image / Illustration) */}
        <div className="hidden md:flex items-center justify-center p-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white drop-shadow-md">
              Welcome Back!
            </h2>
            <p className="mt-4 text-white/80 max-w-xs mx-auto">
              Login to your account and continue your developer journey with us.
            </p>
          </div>
        </div>

        {/* Right Section (Login Form) */}
        <div className="flex items-center justify-center p-6 md:p-12 bg-white dark:bg-[var(--background)] rounded-r-2xl">
          <div className="w-full max-w-md space-y-6">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-[var(--text-color)]">
              Sign In
            </h2>
            <p className="text-sm text-center text-gray-600 dark:text-[var(--text-color)]/70">
              Enter your credentials to access your account.
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
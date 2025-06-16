

"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Submitting ....");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        toast.success("Logged In successfully");
        router.push("/");
        form.reset();
      } else {
        toast.error("FAILED to Log In");
      }
    } catch (error) {
      console.log(error);
      toast.error("FAILED to Log In");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        Welcome Back
      </h2>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="w-full input input-bordered bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full input input-bordered bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition duration-300"
      >
        Sign In
      </button>

      {/* Divider */}
      <div className="relative text-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 px-2 bg-white dark:bg-gray-900 z-10 relative">
          Or sign in with
        </span>
        <div className="absolute left-0 right-0 top-1/2 border-t border-gray-300 dark:border-gray-700 z-0"></div>
      </div>

      {/* Social Login */}
      <SocialLogin />

      {/* Register Link */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Don’t have an account?{" "}
        <Link
          href="/register"
          className="text-orange-500 font-semibold hover:underline"
        >
          Register
        </Link>
      </p>
    </form>
  );
}
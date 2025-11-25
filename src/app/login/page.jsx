"use client";
import Link from "next/link";

import { FaGoogle, FaFacebook } from "react-icons/fa";
import { handleGoogleLogin } from "../actions";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Card Container */}
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-base-content mb-2">
                Welcome Back
              </h1>
              <p className="text-base-content/60">
                Sign in to your WristLook account
              </p>
            </div>
            <form action={handleGoogleLogin} className="space-y-4">
              {/* Social Login Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  type="submit"
                  name="action"
                  value="google"
                  className="btn btn-outline w-full gap-2"
                >
                  <FaGoogle className="text-lg" />
                  Continue with Google
                </button>
              </div>

              {/* Divider */}
              <div className="divider">OR</div>

              {/* Login Form */}
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Remember Me */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text">Remember me</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                name="action"
                value="google"
                className="btn btn-primary w-full"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

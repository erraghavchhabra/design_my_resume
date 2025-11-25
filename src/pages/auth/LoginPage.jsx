import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="relative min-h-screen py-16 flex flex-col overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-800">
      {/* Decorative Background Waves */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.25"
            d="M0,192L60,170.7C120,149,240,107,360,117.3C480,128,600,192,720,192C840,192,960,128,1080,133.3C1200,139,1320,213,1380,250.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-full h-full opacity-20 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.2"
            d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,229.3C840,245,960,235,1080,213.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Top Logo */}
      <div className="flex justify-center items-center space-x-2 mb-6">
        <img src="/assets/svg/ftlogo.svg" alt="Logo" className="lg:w-[150px]" />
      </div>

      {/* Center Form */}
      <div className="flex flex-1 justify-center items-center px-4">
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sign in to your Account
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span>Stay signed in</span>
              </label>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold transition duration-200 shadow-md"
            >
              Log in
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
              By clicking "Log in" you also agree to our{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-6">
            <p className="text-center text-sm text-gray-500 mb-3">
              Or continue with
            </p>
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center space-x-2 border rounded py-2 hover:bg-gray-50 transition">
                <FaFacebookF className="text-blue-600" />
                <span className="font-medium text-gray-700">Facebook</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 border rounded py-2 hover:bg-gray-50 transition">
                <FaGoogle className="text-red-500" />
                <span className="font-medium text-gray-700">Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

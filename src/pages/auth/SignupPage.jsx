import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { SignupApi } from "../../api/AuthApi";


const SignupPage = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);
  const [serverError, setServerError] = useState("");

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },

    validationSchema: Yup.object({
      full_name: Yup.string()
        .required("Full name is required")
        .min(3, "Name must be at least 3 characters"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be 6 characters long"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      setServerError("");
      try {
        const payload = {
          name: values.full_name,
          email: values.email,
          password: values.password,
        };

        const response = await axios.post(SignupApi, payload);

        console.log("Signup Success", response.data);
        navigate("/login");
      } catch (err) {
        setServerError(
          err.response?.data?.message || "Signup failed. Try again!"
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="relative min-h-screen py-16 flex flex-col overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-800">
      {/* Logo */}
      <div className="flex justify-center items-center space-x-2 mb-6">
        <img src="/assets/svg/ftlogo.svg" alt="Logo" className="w-[150px]" />
      </div>

      {/* Form Container */}
      <div className="flex flex-1 justify-center items-center px-4">
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Create your Account
          </h2>

          {serverError && (
            <p className="text-red-600 text-center mb-4 text-sm">
              {serverError}
            </p>
          )}

          <form className="space-y-5" onSubmit={formik.handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="John Doe"
                className={`w-full px-4 py-2 border rounded outline-none transition ${
                  formik.touched.full_name && formik.errors.full_name
                    ? "border-red-500"
                    : "focus:border-indigo-500"
                }`}
                {...formik.getFieldProps("full_name")}
              />
              {formik.touched.full_name && formik.errors.full_name && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.full_name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className={`w-full px-4 py-2 border rounded outline-none transition ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "focus:border-indigo-500"
                }`}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className={`w-full px-4 py-2 border rounded outline-none transition ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "focus:border-indigo-500"
                }`}
                {...formik.getFieldProps("password")}
              />
              <span
                className="absolute right-3 top-10 cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <HiEyeOff /> : <HiEye />}
              </span>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type={showCPass ? "text" : "password"}
                name="confirm_password"
                placeholder="••••••••"
                className={`w-full px-4 py-2 border rounded outline-none transition ${
                  formik.touched.confirm_password &&
                  formik.errors.confirm_password
                    ? "border-red-500"
                    : "focus:border-indigo-500"
                }`}
                {...formik.getFieldProps("confirm_password")}
              />
              <span
                className="absolute right-3 top-10 cursor-pointer"
                onClick={() => setShowCPass(!showCPass)}
              >
                {showCPass ? <HiEyeOff /> : <HiEye />}
              </span>
              {formik.touched.confirm_password &&
                formik.errors.confirm_password && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.confirm_password}
                  </p>
                )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold transition duration-200 shadow-md"
            >
              {formik.isSubmitting ? "Creating..." : "Sign Up"}
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Social Buttons */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <p className="text-center text-sm text-gray-500 mb-3">
              Or sign up with
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

export default SignupPage;

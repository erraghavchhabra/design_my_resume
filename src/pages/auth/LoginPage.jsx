import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoginApi } from "../../api/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/slices/authSlice";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),

    onSubmit: async (values) => {
      setApiError("");

      try {
        const res = await axios.post(LoginApi, {
          email: values.email,
          password: values.password,
        });

        const { token, user } = res.data;

        // Save token in cookies
        Cookies.set("user_token", token, {
          expires: values.remember ? 7 : 1, // 7 days if remember me checked
          secure: true,
        });

        dispatch(setUserData(user));
        // 🔥 Read redirect param
        const params = new URLSearchParams(location.search);
        const redirectTo = params.get("redirect");
        if (redirectTo) {
          navigate(redirectTo);
        } else {
          navigate("/"); // default fallback
        }
      } catch (err) {
        setApiError(err?.response?.data?.message || "Login failed!");
      }
    },
  });

  return (
    <div className="relative min-h-screen py-16 flex flex-col overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-800">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src="/assets/svg/ftlogo.svg" alt="Logo" className="w-[150px]" />
      </div>

      {/* Login Form */}
      <div className="flex flex-1 justify-center items-center px-4">
        <div className="bg-white/95 shadow-xl rounded-xl p-8 w-full max-w-md border">
          <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>

          {apiError && (
            <div className="text-red-600 text-sm mb-3">{apiError}</div>
          )}

          <form className="space-y-5" onSubmit={formik.handleSubmit}>
            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className={`w-full px-4 py-2 border rounded ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-600"
                    : ""
                }`}
                placeholder="you@example.com"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-600 text-xs mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={`w-full px-4 py-2 border rounded ${
                    formik.errors.password && formik.touched.password
                      ? "border-red-600"
                      : ""
                  }`}
                  placeholder="********"
                  {...formik.getFieldProps("password")}
                />
                <span
                  className="absolute right-3 top-2 cursor-pointer text-sm text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-600 text-xs mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* Remember & Forgot */}
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  onChange={formik.handleChange}
                />
                Stay signed in
              </label>
              <Link to="/forget" className="text-indigo-600 font-medium">
                Forgot?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold"
            >
              {formik.isSubmitting ? "Logging in..." : "Log in"}
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-700">
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-600 font-semibold">
              Sign up
            </Link>
          </p>

          <div className="mt-6 border-t pt-6">
            <p className="text-center text-sm text-gray-500 mb-3">
              Or continue with
            </p>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 border rounded py-2">
                <FaFacebookF className="text-blue-600" /> Facebook
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border rounded py-2">
                <FaGoogle className="text-red-500" /> Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

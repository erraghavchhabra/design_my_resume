import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { LoginApi, SignupApi } from "../../api/AuthApi";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/slices/authSlice";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Button } from "../../components/ui/button";

interface Props {
  open: boolean;
  onClose: () => void;
  onLogin: () => void
}

const AuthModal: React.FC<Props> = ({ open, onClose , onLogin }) => {
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [apiError, setApiError] = useState("");
  const dispatch = useDispatch();

  // ================= LOGIN =================
  const loginFormik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email required"),
      password: Yup.string().required("Password required"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(LoginApi, values);
        Cookies.set("user_token", res.data.token, { expires: 7 });
        dispatch(setUserData(res.data.user));
        onLogin();
        onClose();
      } catch (err: any) {
        setApiError(err?.response?.data?.message || "Login failed");
      }
    },
  });

  // ================= SIGNUP =================
  const signupFormik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: Yup.object({
      name: Yup.string().min(3).required("Name required"),
      email: Yup.string().email().required("Email required"),
      password: Yup.string().min(6).required("Password required"),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post(SignupApi, values);
        setMode("login");
      } catch (err: any) {
        const errorData = err?.response?.data;
        if (errorData?.errors) {
          setApiError(Object.values(errorData.errors).flat().join(" "));
        } else {
          setApiError(errorData?.message || "Signup failed");
        }
      }
    },
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl flex">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-5 text-2xl font-bold"
        >
          ×
        </button>

        {/* LEFT SIDE */}
        <div className="hidden md:flex items-center w-1/2 bg-gradient-to-br from-blue-200 via-blue-100 to-green-100 p-8 flex-col justify-center">
          <h2 className="text-2xl max-w-60 font-bold mb-6 leading-snug text-center">
            Instantly create a cover letter enhanced by AI
          </h2>
          <p className="text-base max-w-60 text-gray-700 mb-4 text-center">
            Set yourself apart from competition with a cover letter made just
            for you.
          </p>

          <img
            src="/assets/img/cv-maker-hero-img.png"
            alt="CV Preview"
            className="w-44"
          />

          <div className="mt-8 text-lg font-semibold flex items-center gap-2 justify-center text-center relative">
            <span className="rounded-full w-7 h-7 inline-block bg-green-400 border-black border text-black">
              ✔
            </span>
            Sign up to get going!
            {/* <img
              className="absolute -bottom-1 right-1 w-28"
              src="/assets/svg/drawnRightArrow2.svg"
              alt="drawnRightArrow"
            /> */}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-8">
            {mode === "signup"
              ? "Create an account to get your resume"
              : "Welcome back! Please sign in."}
          </h2>

          {apiError && (
            <div className="text-red-600 text-sm mb-4">{apiError}</div>
          )}

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6 ">
            <button className="w-full border rounded-lg py-3  flex items-center justify-center gap-3 shadow-sm hover:shadow">
              <FaFacebookF className="text-blue-600" />
              {mode === "signup"
                ? "Sign up with Facebook"
                : "Sign in with Facebook"}
            </button>

            <button className="w-full border rounded-lg py-3 flex items-center justify-center gap-3 shadow-sm hover:shadow">
              <FaGoogle className="text-red-500" />
              {mode === "signup"
                ? "Sign up with Google"
                : "Sign in with Google"}
            </button>
          </div>

          <div className="flex items-center mb-6">
            <div className="flex-1 border-t"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="flex-1 border-t"></div>
          </div>

          {/* FORM */}
          <form
            onSubmit={
              mode === "signup"
                ? signupFormik.handleSubmit
                : loginFormik.handleSubmit
            }
            className="space-y-3"
          >
            {mode === "signup" && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg"
                {...signupFormik.getFieldProps("name")}
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
              {...(mode === "signup"
                ? signupFormik.getFieldProps("email")
                : loginFormik.getFieldProps("email"))}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg"
              {...(mode === "signup"
                ? signupFormik.getFieldProps("password")
                : loginFormik.getFieldProps("password"))}
            />

            {mode === "login" && (
              <div className="text-blue-600 text-sm cursor-pointer">
                Forgot your password?
              </div>
            )}

            <Button
              type="submit"
              variant="default"
              className="w-full rounded-full md:py-7"
            >
              Get resume
            </Button>
          </form>

          {/* Switch Mode */}
          <div className="mt-6 text-center">
            {mode === "signup" ? (
              <button
                onClick={() => {
                  setApiError("");
                  setMode("login");
                }}
                className="text-blue-600 font-semibold"
              >
                Already have an account?
              </button>
            ) : (
              <button
                onClick={() => {
                  setApiError("");
                  setMode("signup");
                }}
                className="text-blue-600 font-semibold"
              >
                Need an account?
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

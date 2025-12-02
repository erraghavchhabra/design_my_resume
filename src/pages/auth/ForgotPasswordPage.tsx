import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { ForgotPasswordApi, ResetPasswordApi } from "../../api/AuthApi";




const ForgotSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is required"),
});

const ResetSchema = Yup.object({
  password: Yup.string().min(6).required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [resetToken, setResetToken] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // Step 1: Send Email
  const handleForgot = async (values: any) => {
    try {
      const res = await axios.post(ForgotPasswordApi, { email: values.email });
      toast.success("Reset link created successfully!");

      setEmail(values.email);
      setResetToken(res.data.reset_token); // token save
      setStep(2);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  // Step 2: Reset Password
  const handleReset = async (values: any) => {
    try {
      await axios.post(`${ResetPasswordApi}/${resetToken}`, {
        password: values.password,
      });

      toast.success("Password reset successfully!");
      setResetToken(""); // clear token after use
      navigate("/login");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Reset failed!");
    }
  };

  return (
    <div className="relative min-h-screen py-16 flex flex-col overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-800">
      {/* LOGO */}
      <div className="flex justify-center items-center space-x-2 mb-6">
        <img src="/assets/svg/ftlogo.svg" alt="Logo" className="w-[150px]" />
      </div>

      <div className="flex flex-1 justify-center items-center px-4">
        <div className="bg-white/95 shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-100">
          {/* Step UI */}
          <div className="flex justify-center gap-2 mb-6 text-xs font-medium">
            <span
              className={`px-3 py-1 rounded-full ${
                step === 1
                  ? "bg-indigo-100 text-indigo-700"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              1. Verify Email
            </span>
            <span
              className={`px-3 py-1 rounded-full ${
                step === 2
                  ? "bg-indigo-100 text-indigo-700"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              2. Set New Password
            </span>
          </div>

          {/* STEP 1 FORM */}
          {step === 1 && (
            <Formik
              initialValues={{ email: "" }}
              validationSchema={ForgotSchema}
              onSubmit={handleForgot}
            >
              <Form className="space-y-5">
                <div>
                  <label className="block text-sm mb-1">Email Address</label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full px-4 py-2 border rounded"
                    placeholder="you@example.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                >
                  Continue
                </button>

                <p className="text-center text-sm mt-4">
                  Remember your password?{" "}
                  <Link to="/login" className="text-indigo-600 font-semibold">
                    Back to login
                  </Link>
                </p>
              </Form>
            </Formik>
          )}

          {/* STEP 2 FORM */}
          {step === 2 && (
            <Formik
              initialValues={{ password: "", confirmPassword: "" }}
              validationSchema={ResetSchema}
              onSubmit={handleReset}
            >
              <Form className="space-y-5">
                <label className="block text-sm text-gray-700">
                  Updating password for: <b>{email}</b>
                </label>

                <div>
                  <Field
                    name="password"
                    type="password"
                    className="w-full px-4 py-2 border rounded"
                    placeholder="New password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Confirm password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                >
                  Reset Password
                </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-gray-600 hover:text-indigo-600 mx-auto block"
                >
                  ← Go Back
                </button>
              </Form>
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
}

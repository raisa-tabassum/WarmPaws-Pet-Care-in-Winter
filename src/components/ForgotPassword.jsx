import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const location = useLocation();
  const { email: prefillEmail } = location.state || {};
  const [email, setEmail] = useState(prefillEmail || "");
  const { resetPassword } = useContext(AuthContext);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your Gmail inbox.");
        // Gmail open
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleReset} className="card-body">
          <h1 className="text-4xl font-bold text-[#131952]">Reset Password</h1>
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="btn btn-neutral mt-3 border-none bg-[#131952]">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [show, setShow] = useState(false);
  const { login, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    login(email, password)
      .then(() => {
        toast.success("Login Successful!");

        // desired route handle
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Login Successful!");

        const from = location.state?.from?.pathname || "/";
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-4xl font-bold text-[#131952]">Login now!</h1>
          <fieldset className="fieldset mt-2">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                type={show ? "text" : "password"}
                className="input"
                placeholder="••••••••"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute text-lg right-[30px] top-[30px] cursor-pointer z-50"
              >
                {show ? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>}
              </span>
            </div>
              <Link to="/auth/forgetPassword" state={{email}} className="link link-hover hover:underline cursor-pointer">
                Forgot password?
              </Link>
            <button className="btn btn-neutral mt-3 border-none bg-[#131952]">
              Login
            </button>
            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
        </form>
        <p className="text-blue-950 text-center font-bold mb-6">
          Dont’t Have An Account ?{" "}
          <Link to="/auth/signUp">
            <span className="text-pink-700 hover:underline cursor-pointer">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

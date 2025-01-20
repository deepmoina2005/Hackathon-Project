import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import loginBg from "../assets/loginbg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // Mock login API response
    console.log("Logging in with:", { email, password });
    setTimeout(() => {
      alert("Login Successful!");
      navigate("/"); // Redirect to the home page
    }, 1000);
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Left Section - Form */}
      <div className="w-2/3 bg-gray-900 flex flex-col justify-center items-center px-12">
        <h1 className="text-5xl font-bold text-white mb-8">Sign In</h1>
        <form className="w-full max-w-md space-y-6" onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="relative">
            <label htmlFor="email" className="block text-white text-sm mb-2">
              <span className="text-red-500">*</span> Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email id"
              className="w-full px-4 py-3 pl-10 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <AiOutlineMail className="absolute top-1/2 left-3 mt-3 transform -translate-y-1/2 text-gray-500 text-lg" />
          </div>
          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="block text-white text-sm mb-2">
              <span className="text-red-500">*</span> Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 pl-10 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <AiOutlineLock className="absolute top-1/2 mt-3 left-3 transform -translate-y-1/2 text-gray-500 text-lg" />
          </div>
          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-blue-500 flex flex-col justify-center items-center text-center px-8">
        <h2 className="text-4xl font-bold text-white mb-6">Welcome Back!</h2>
        <p className="text-white text-lg mb-12">
          Explore endless opportunities. Sign in to continue.
        </p>
        {/* Display Image */}
        <img
          src={loginBg}
          alt="Illustration"
          className="w-3/4 max-w-sm mx-auto mb-8"
        />
        <div className="text-white text-sm">
          <a href="#" className="underline mr-4">
            Terms & Conditions
          </a>
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

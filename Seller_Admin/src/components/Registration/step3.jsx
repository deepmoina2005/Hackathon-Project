import React, { useState } from "react";

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRobot, setIsRobot] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!isRobot) {
      alert("Please confirm you are not a robot.");
      return;
    }
    if (!termsAccepted) {
      alert("Please accept the Terms and Conditions.");
      return;
    }
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 3: Account Security</h2>

      {/* New Password */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">New Password:</label>
        <input
          type="password"
          placeholder="Enter new password"
          className="block w-full p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Confirm Password */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Confirm Password:</label>
        <input
          type="password"
          placeholder="Re-enter new password"
          className="block w-full p-2 border border-gray-300 rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {/* I am not a robot */}
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={isRobot}
            onChange={(e) => setIsRobot(e.target.checked)}
          />
          I am not a robot
        </label>
      </div>

      {/* Terms and Conditions */}
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          I have read and agree to the <a href="#" className="text-blue-500">Terms and Conditions</a>
        </label>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;

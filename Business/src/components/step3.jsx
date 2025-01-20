import React, { useState } from "react";

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
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
      <h2 className="text-xl font-bold mb-4 text-black">Step 3: Account Security</h2>

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

      <div>
        <p className="text-gray-700">
        <span className="font-semibold">1.User Account Responsibility:</span> Users are required to create an account to access certain features of the marketplace. Account holders must provide accurate, up-to-date information and are solely responsible for maintaining the confidentiality of their login credentials. Any unauthorized activity under the account will be the user's responsibility.
        </p>
        <p className="text-gray-700">
        <span className="font-semibold">2.Prohibited Activities:</span> Users agree not to engage in activities that violate local, national, or international laws, such as selling counterfeit goods, engaging in fraudulent transactions, or distributing harmful software. The platform reserves the right to suspend accounts involved in prohibited activities without prior notice..
        </p>
        <p className="text-gray-700">
        <span className="font-semibold">3.Payment and Transaction Policy:</span> All payments must be completed through the marketplace's approved methods. The platform may charge transaction fees or commissions on sales. Users must ensure that payment information is accurate, and any disputes regarding payments will be resolved according to the platform's dispute resolution process.
        </p>
        <p className="text-gray-700">
        <span className="font-semibold">4.Limitation of Liability:</span> The marketplace acts as an intermediary and is not liable for disputes between buyers and sellers. The platform is not responsible for product defects, delivery delays, or other issues unless explicitly stated. Users agree to indemnify the platform against any claims arising from their use of the service.
        </p>
        <p className="text-gray-700">
        <span className="font-semibold">5.Termination of Service:</span> The marketplace reserves the right to suspend or terminate access to users who violate the terms and conditions, engage in fraudulent activities, or misuse the platform. Users may also voluntarily terminate their accounts, but any ongoing transactions or disputes must be resolved prior to closure.
        </p>
      </div>

      {/* Terms and Conditions */}
      <div className="mb-4">
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            className="p-2 w-4 h-4"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <span className="text-black text-md">I have read and agree to the</span>
        </label>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-white text-black border border-primary2 px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-primary2 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;

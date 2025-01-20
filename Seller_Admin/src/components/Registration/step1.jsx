// const Step1 = ({ formData, setFormData, nextStep }) => {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Step 1: Personal Details</h2>
//       <input
//         type="text"
//         placeholder="First Name"
//         className="block w-full p-2 border border-gray-300 rounded mb-4"
//         value={formData.firstName}
//         onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         className="block w-full p-2 border border-gray-300 rounded mb-4"
//         value={formData.lastName}
//         onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//       />
//       <button
//         onClick={nextStep}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Step1;

import React, { useState } from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  const handleSendEmailOtp = () => {
    if (formData.email) {
      setEmailOtpSent(true);
      alert("Email OTP sent! (Demo OTP: 1234)");
    }
  };

  const handleVerifyEmailOtp = () => {
    if (formData.emailOtp === "1234") {
      setEmailVerified(true);
      alert("Email verified successfully!");
    } else {
      alert("Invalid Email OTP");
    }
  };

  const handleSendPhoneOtp = () => {
    if (formData.phone) {
      setPhoneOtpSent(true);
      alert("Phone OTP sent! (Demo OTP: 5678)");
    }
  };

  const handleVerifyPhoneOtp = () => {
    if (formData.phoneOtp === "5678") {
      setPhoneVerified(true);
      alert("Phone verified successfully!");
    } else {
      alert("Invalid Phone OTP");
    }
  };

  const isNextDisabled = !(emailVerified && phoneVerified);

  return (
    <div className="p-6 bg-[#617190] text-white rounded-md">
      <h2 className="text-xl font-bold mb-4">Step 1: Personal & Business Details</h2>

      {/* Full Name */}
      <input
        type="text"
        placeholder="Full Name"
        className="block w-full p-2 border border-[#B8C0CC] rounded mb-4 placeholder-[#283142] text-black"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />

      {/* Market Name */}
      <input
        type="text"
        placeholder="Market Name"
        className="block w-full p-2 border border-[#B8C0CC] rounded mb-4 placeholder-[#283142] text-black"
        value={formData.companyName}
        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
      />

      {/* Full Address */}
      <input
        type="text"
        placeholder="Full Address"
        className="block w-full p-2 border border-[#B8C0CC] rounded mb-4 placeholder-[#283142] text-black"
        value={formData.fullAddress}
        onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
      />

      {/* Market Location */}
      <input
        type="text"
        placeholder="Market Location"
        className="block w-full p-2 border border-[#B8C0CC] rounded mb-4 placeholder-[#283142] text-black"
        value={formData.marketLocation}
        onChange={(e) => setFormData({ ...formData, marketLocation: e.target.value })}
      />

      {/* Pin Code */}
      <input
        type="text"
        placeholder="Pin Code"
        className="block w-full p-2 border border-[#B8C0CC] rounded mb-4 placeholder-[#283142] text-black"
        value={formData.pinCode}
        onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
      />

      {/* Market Category */}
      <select
        className="block w-full p-2 border border-[#B8C0CC] rounded mb-4 placeholder-[#283142] text-black"
        value={formData.marketCategory}
        onChange={(e) => setFormData({ ...formData, marketCategory: e.target.value })}
      >
        <option value="" disabled>
          Select Market Category
        </option>
        <option value="Technology">Technology</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Education">Education</option>
        <option value="Retail">Retail</option>
        <option value="Finance">Finance</option>
      </select>

      {/* Phone Number */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Phone Number"
          className="block w-full p-2 border border-[#B8C0CC] rounded mb-2 placeholder-[#283142] text-black"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <button
          onClick={handleSendPhoneOtp}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-2"
          disabled={phoneOtpSent}
        >
          {phoneOtpSent ? "OTP Sent" : "Send OTP"}
        </button>
        {phoneOtpSent && (
          <div>
            <input
              type="text"
              placeholder="Enter Phone OTP"
              className="block w-full p-2 border border-[#B8C0CC] rounded mb-2 placeholder-[#283142] text-black"
              value={formData.phoneOtp}
              onChange={(e) => setFormData({ ...formData, phoneOtp: e.target.value })}
            />
            <button
              onClick={handleVerifyPhoneOtp}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Verify Phone OTP
            </button>
          </div>
        )}
      </div>

      {/* Email ID */}
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email ID"
          className="block w-full p-2 border border-[#B8C0CC] rounded mb-2 placeholder-[#283142] text-black"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button
          onClick={handleSendEmailOtp}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-2"
          disabled={emailOtpSent}
        >
          {emailOtpSent ? "OTP Sent" : "Send OTP"}
        </button>
        {emailOtpSent && (
          <div>
            <input
              type="text"
              placeholder="Enter Email OTP"
              className="block w-full p-2 border border-[#B8C0CC] rounded mb-2 placeholder-[#283142] text-black"
              value={formData.emailOtp}
              onChange={(e) => setFormData({ ...formData, emailOtp: e.target.value })}
            />
            <button
              onClick={handleVerifyEmailOtp}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Verify Email OTP
            </button>
          </div>
        )}
      </div>

      <button
        onClick={nextStep}
        className={`w-full py-2 text-white rounded ${isNextDisabled ? "bg-gray-400" : "bg-blue-600"}`}
        disabled={isNextDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;

import React from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div className="p-6 bg-white text-black rounded-md">
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
      <input
        type="text"
        placeholder="Phone Number"
        className="block w-full p-2 border border-[#B8C0CC] rounded mb-4 placeholder-[#283142] text-black"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />

      {/* Email ID */}
      <input
        type="email"
        placeholder="Email ID"
        className="block w-full p-2 border border-[#B8C0CC] rounded mb-4 placeholder-[#283142] text-black"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <button
        onClick={nextStep}
        className="w-full py-2 bg-primary2 text-white rounded-md hover:bg-primary2-dark"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
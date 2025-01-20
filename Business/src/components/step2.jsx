// const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Step 2: Contact Information</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         className="block w-full p-2 border border-gray-300 rounded mb-4"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//       <input
//         type="tel"
//         placeholder="Phone Number"
//         className="block w-full p-2 border border-gray-300 rounded mb-4"
//         value={formData.phone}
//         onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//       />
//       <div className="flex justify-between">
//         <button
//           onClick={prevStep}
//           className="bg-gray-500 text-white px-4 py-2 rounded"
//         >
//           Back
//         </button>
//         <button
//           onClick={nextStep}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Step2;



import React, { useState } from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [panImagePreview, setPanImagePreview] = useState(null);
  const [gstinImagePreview, setGstinImagePreview] = useState(null);
  const [sellerPhotoPreview, setSellerPhotoPreview] = useState(null);
  const [digitalSignaturePreview, setDigitalSignaturePreview] = useState(null);
  const [lincesPreview, setLincesPreview] = useState(null);
  const [marketPhotoPreview, setMarketPhotoPreview] = useState(null);

  // File size limit (5 MB)
  const FILE_SIZE_LIMIT = 5 * 1024 * 1024;

  // Handle file upload and preview
  const handleFileChange = (e, key, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > FILE_SIZE_LIMIT) {
        alert("File size should not exceed 5 MB.");
        return;
      }
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }

      setFormData({ ...formData, [key]: file });

      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Validation for text inputs
  const isFormValid = () => {
    if (!formData.panCardNumber) {
      alert("PAN Card Number is required.");
      return false;
    }
    if (!formData.gstinNumber) {
      alert("GSTIN Number is required.");
      return false;
    }
    if (!formData.panCardImage || !formData.gstinCardImage) {
      alert("All required images must be uploaded.");
      return false;
    }
    return true;
  };

  // Handle next step
  const handleNext = () => {
    if (isFormValid()) {
      nextStep();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-black">Step 2: Business Information</h2>

      {/* PAN Card Number */}
      <input
        type="text"
        placeholder="PAN Card Number"
        className="block w-full p-2 border border-gray-300 rounded mb-4"
        value={formData.panCardNumber || ""}
        onChange={(e) => setFormData({ ...formData, panCardNumber: e.target.value })}
      />

      {/* GSTIN Number */}
      <input
        type="text"
        placeholder="GSTIN Number"
        className="block w-full p-2 border border-gray-300 rounded mb-4"
        value={formData.gstinNumber || ""}
        onChange={(e) => setFormData({ ...formData, gstinNumber: e.target.value })}
      />

      {/* PAN Card Image Upload */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Upload PAN Card Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "panCardImage", setPanImagePreview)}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded p-2"
        />
        {panImagePreview && (
          <img
            src={panImagePreview}
            alt="PAN Preview"
            className="mt-2 w-32 h-32 object-cover rounded border"
          />
        )}
      </div>

      {/* GSTIN Card Image Upload */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Upload GSTIN Card Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "gstinCardImage", setGstinImagePreview)}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded p-2"
        />
        {gstinImagePreview && (
          <img
            src={gstinImagePreview}
            alt="GSTIN Preview"
            className="mt-2 w-32 h-32 object-cover rounded border"
          />
        )}
      </div>

      {/* Seller Photo */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Upload Seller Photo:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "sellerPhoto", setSellerPhotoPreview)}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded p-2"
        />
        {sellerPhotoPreview && (
          <img
            src={sellerPhotoPreview}
            alt="Seller Photo Preview"
            className="mt-2 w-32 h-32 object-cover rounded border"
          />
        )}
      </div>

      {/* Digital Signature */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Upload Digital Signature:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "digitalSignature", setDigitalSignaturePreview)}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded p-2"
        />
        {digitalSignaturePreview && (
          <img
            src={digitalSignaturePreview}
            alt="Digital Signature Preview"
            className="mt-2 w-32 h-32 object-cover rounded border"
          />
        )}
      </div>

      {/* Licences */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Upload Business License:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "licence", setLincesPreview)}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded p-2"
        />
        {lincesPreview && (
          <img
            src={lincesPreview}
            alt="Digital Signature Preview"
            className="mt-2 w-32 h-32 object-cover rounded border"
          />
        )}
      </div>

      {/* Market Photo */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Upload Market Photo (with GPS):</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "marketPhoto", setMarketPhotoPreview)}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded p-2"
        />
        {marketPhotoPreview && (
          <img
            src={marketPhotoPreview}
            alt="Market Photo Preview"
            className="mt-2 w-32 h-32 object-cover rounded border"
          />
        )}
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
          onClick={handleNext}
          className="bg-primary2 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
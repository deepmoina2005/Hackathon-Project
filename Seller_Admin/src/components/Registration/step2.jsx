const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 2: Contact Information</h2>
      <input
        type="email"
        placeholder="Email"
        className="block w-full p-2 border border-gray-300 rounded mb-4"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="block w-full p-2 border border-gray-300 rounded mb-4"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;

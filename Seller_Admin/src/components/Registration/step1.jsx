const Step1 = ({ formData, setFormData, nextStep }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 1: Personal Details</h2>
      <input
        type="text"
        placeholder="First Name"
        className="block w-full p-2 border border-gray-300 rounded mb-4"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="block w-full p-2 border border-gray-300 rounded mb-4"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <button
        onClick={nextStep}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;

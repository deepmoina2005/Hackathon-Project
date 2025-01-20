import React, { useState } from "react";
import { X } from "lucide-react"; // Importing the X icon from Lucide
import { useNavigate } from "react-router-dom"; // Importing useNavigate from react-router-dom
import Step1 from "./Registration/Step1";
import Step2 from "./Registration/Step2";
import Step3 from "./Registration/Step3";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    emailOtp: "",
    phone: "",
    phoneOtp: "",
  });
  const [showForm, setShowForm] = useState(true); // State to manage form visibility

  const navigate = useNavigate(); // Initialize the navigate function

  const totalSteps = 3; // Total number of steps in the form
  const nextStep = () => setStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  const closeForm = () => {
    // Resetting form data and hiding the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      emailOtp: "",
      phone: "",
      phoneOtp: "",
    });
    setShowForm(false); // Hiding the form
    navigate("/"); // Navigate to home page ("/") when the close button is clicked
  };

  const progressPercentage = (step / totalSteps) * 100;

  return (
    <>
      {showForm && (
        <div className="relative w-[1200px] h-full p-10 bg-white border shadow rounded text-white">
          {/* Close Button */}
          <button
            onClick={closeForm}
            className="absolute top-4 right-2 p-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
            aria-label="Close"
          >
            <X size={20} color="black" />
          </button>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="relative h-4 bg-gray-300 rounded">
              <div
                className="absolute top-0 left-0 h-4 bg-primary2 rounded"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-center mt-2">
              Step {step} of {totalSteps}
            </p>
          </div>

          {/* Step Components */}
          {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
          {step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && <Step3 formData={formData} prevStep={prevStep} />}
        </div>
      )}
    </>
  );
};

export default MultiStepForm;

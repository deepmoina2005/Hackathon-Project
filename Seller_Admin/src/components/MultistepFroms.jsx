import React, { useState } from "react";
import Step1 from "./Registration/step1";
import Step2 from "./Registration/Step2";
import Step3 from "./Registration/Step3";
import ProgressBar from "./prgressBar";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
      <ProgressBar step={step} />
      {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 formData={formData} prevStep={prevStep} />}
    </div>
  );
};

export default MultiStepForm;

import React from "react";

const Step1PersonalInfo = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">اطلاعات شخصی</h2>
      <input
        type="text"
        placeholder="نام کامل"
        value={formData.fullName}
        onChange={handleChange("fullName")}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="email"
        placeholder="ایمیل"
        value={formData.email}
        onChange={handleChange("email")}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="شماره تماس"
        value={formData.phone}
        onChange={handleChange("phone")}
        className="w-full mb-3 p-2 border rounded"
      />
      <button
        onClick={nextStep}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        مرحله بعد
      </button>
    </div>
  );
};

export default Step1PersonalInfo;


import React, { useContext, useState } from "react";
import { AdminContext } from "../context/ContextAdmin";

const Contact = () => {
  const { data, updatePortfolio } = useContext(AdminContext);
  const { contact } = data;

  const [formData, setFormData] = useState({
    email: contact.email || "",
    phone: contact.phone || "",
    address: contact.address || "",
    city: contact.city || "",
    country: contact.country || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePortfolio({
      contact: formData,
    });
  };

  return (
    <div className="w-full h-auto flex items-center justify-center ">
      <div className=" p-8  max-w-md w-full h-full bg-white">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4 text-center">
          Contact Information
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please add your contact details.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 max-[768px]:pb-[20px]"
        >
          {["email", "phone", "address", "city", "country"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-teal-700 mb-2 capitalize">
                {field}
              </label>
              <input
                onChange={handleChange}
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                placeholder={`Enter your ${field}`}
                className="w-full px-4 py-3 border border-teal-300 rounded-full shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none text-gray-700"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white text-sm font-medium rounded-full shadow-md hover:bg-teal-600 transition-all"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4 text-center">
          Contact Email
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please add your contact email to get in touch with us.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label
              htmlFor="contactEmail"
              className="block text-sm font-medium text-teal-700 mb-2"
            >
              Email Address
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={email}
              placeholder="Enter your contact email"
              className="w-full px-4 py-3 border border-teal-300 rounded-full shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none text-gray-700"
            />
          </div>

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

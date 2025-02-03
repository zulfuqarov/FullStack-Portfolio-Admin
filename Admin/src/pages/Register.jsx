import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../context/ContextAdmin";
import { useNavigate } from "react-router-dom";
const positions = [
  { value: "frontend" },
  { value: "backend" },
  { value: "fullstack" },
  { value: "mobile" },
  { value: "data-scientist" },
  { value: "devops" },
  { value: "ui-ux" },
  { value: "game-dev" },
  { value: "ai-ml" },
  { value: "cybersecurity" },
  { value: "graphic-designer" },
  { value: "motion-designer" },
  { value: "visual-artist" },
  { value: "photographer" },
  { value: "videographer" },
  { value: "project-manager" },
  { value: "content-creator" },
  { value: "marketing-specialist" },
  { value: "seo-specialist" },
  { value: "creative-technologist" },
  { value: "problem-solver" },
  { value: "innovator" },
  { value: "lifelong-learner" },
  { value: "storyteller" },
  { value: "visionary-thinker" },
  { value: "aspiring-frontend" },
  { value: "junior-software" },
  { value: "creative-enthusiast" },
];

const Register = () => {
  const navigate = useNavigate();

  const { registerFunc, registerLoading } = useContext(AdminContext);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    position: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};

    if (formData.firstname.length < 4) {
      errors.firstname = "First name must be at least 4 characters long.";
    }

    if (formData.lastname.length < 4) {
      errors.lastname = "Last name must be at least 4 characters long.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (formData.password.length < 8) {
      errors.password =
        "Password must be max 8 characters and include at least one uppercase letter.";
    }

    if (!formData.position) {
      errors.position = "Please select a position.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      registerFunc(formData);
    }
  };

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwtToken="));

    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("jwtToken="));

  if (token) return null;

  return (
    <div className="w-full h-auto flex mt-[80px] justify-center items-center p-6">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border rounded-lg focus:outline-none ${
                errors.firstname ? "border-red-500" : "border-teal-400"
              }`}
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border rounded-lg focus:outline-none ${
                errors.lastname ? "border-red-500" : "border-teal-400"
              }`}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border rounded-lg focus:outline-none ${
                errors.email ? "border-red-500" : "border-teal-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border rounded-lg focus:outline-none ${
                errors.password ? "border-red-500" : "border-teal-400"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Position Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Position
            </label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className={`w-full p-3 mt-2 border rounded-lg focus:outline-none ${
                errors.position ? "border-red-500" : "border-teal-400"
              }`}
            >
              <option value="" disabled>
                Select a position
              </option>
              {positions.map((position) => (
                <option key={position.value} value={position.value}>
                  {position.value.charAt(0).toUpperCase() +
                    position.value.slice(1).replace("-", " ")}
                </option>
              ))}
            </select>
            {errors.position && (
              <p className="text-red-500 text-sm mt-1">{errors.position}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none"
          >
            {registerLoading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
                  ></path>
                </svg>
                loading...
              </div>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
          </span>
          <Link
            to="/Login"
            className="text-teal-500 font-semibold hover:text-teal-600"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

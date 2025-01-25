import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    position: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit işlemi burada yapılacak
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center p-6 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          <div>
            <label
              htmlFor="surname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          <div>
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-700"
            >
              Select Position
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
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
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">Don't have an account? </span>
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

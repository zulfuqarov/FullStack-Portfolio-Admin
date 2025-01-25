import { useState } from "react";
function About() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    bio: "",
    image: null,
    linkedin: "",
    youtube: "",
    github: "",
    instagram: "",
    facebook: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending data to the server
    console.log("Portfolio data submitted", formData);
  };

  return (
    <div className="w-full h-full overflow-y-auto pt-[15px]">
      <div className=" w-full h-full  p-6">
        <h2 className="text-3xl font-bold text-teal-600  mb-6">
          Edit Portfolio
        </h2>

        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          {/* Image Upload */}
          <div className="flex justify-center ">
            <label htmlFor="image" className="cursor-pointer">
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="Portfolio"
                  className="w-32 h-32 rounded-full object-cover border-2 border-teal-600"
                />
              ) : (
                <div className="w-32 h-32 rounded-full border-2 border-teal-600 flex items-center justify-center text-teal-600 font-bold">
                  Upload Image
                </div>
              )}
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[30px]">
            {/* Position */}
            <div>
              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter user's name"
                />
              </div>

              {/* Position (Select Dropdown) */}
              <div className="mb-4">
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700"
                >
                  Position
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                >
                  <option value="" disabled>
                    Select a position
                  </option>
                  {positions.map((pos, index) => (
                    <option key={index} value={pos.value}>
                      {pos.value.replace("-", " ").toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bio */}
              <div className="mb-4">
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Write a short bio"
                  rows="4"
                />
              </div>
            </div>

            {/* Social Media Links */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-medium text-gray-700"
                >
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter LinkedIn profile link"
                />
              </div>
              <div>
                <label
                  htmlFor="youtube"
                  className="block text-sm font-medium text-gray-700"
                >
                  YouTube
                </label>
                <input
                  type="url"
                  id="youtube"
                  name="youtube"
                  value={formData.youtube}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter YouTube channel link"
                />
              </div>
              <div>
                <label
                  htmlFor="github"
                  className="block text-sm font-medium text-gray-700"
                >
                  GitHub
                </label>
                <input
                  type="url"
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter GitHub profile link"
                />
              </div>
              <div>
                <label
                  htmlFor="instagram"
                  className="block text-sm font-medium text-gray-700"
                >
                  Instagram
                </label>
                <input
                  type="url"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter Instagram profile link"
                />
              </div>
              <div>
                <label
                  htmlFor="facebook"
                  className="block text-sm font-medium text-gray-700"
                >
                  Facebook
                </label>
                <input
                  type="url"
                  id="facebook"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter Facebook profile link"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-[250px] p-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Save Portfolio
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;

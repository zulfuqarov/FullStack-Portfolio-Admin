import { useContext, useState } from "react";
import { AdminContext } from "../context/ContextAdmin";

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
function About() {
  const { data, updatePortfolio } = useContext(AdminContext);
  const {
    firstname,
    lastname,
    position,
    bio,
    img,
    linkedinUrl,
    youtubeUrl,
    githubUrl,
    instagramUrl,
    facebookUrl,
  } = data;
  const [formData, setFormData] = useState({
    firstname: firstname || "",
    lastname: lastname || "",
    position: position || "",
    bio: bio || "",
    img: img || "",
    linkedinUrl: linkedinUrl || "",
    youtubeUrl: youtubeUrl || "",
    githubUrl: githubUrl || "",
    instagramUrl: instagramUrl || "",
    facebookUrl: facebookUrl || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [imgPreview, setimgPreview] = useState(data.img || "");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      img: file,
    }));

    setimgPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    updatePortfolio(data);
  };

  return (
    <div className="w-full h-full overflow-y-auto pt-[15px]">
      <div className=" w-full h-full  p-6">
        <h2 className="text-3xl font-bold text-teal-600  mb-6">
          Edit Portfolio
        </h2>

        <form
          className="flex flex-col justify-center items-center pb-[20px]"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center ">
            <label htmlFor="img" className="cursor-pointer">
              {imgPreview ? (
                <img
                  src={imgPreview}
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
                id="img"
                name="img"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div>
            <div>
              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname || ""}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter user's name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname || ""}
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
                  value={formData.position || ""}
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
                  value={formData.bio || ""}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Write a short bio"
                  rows="4"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="linkedinUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedinUrl"
                  name="linkedinUrl"
                  value={formData.linkedinUrl || ""}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter LinkedIn profile link"
                />
              </div>
              <div>
                <label
                  htmlFor="youtubeUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  YouTube
                </label>
                <input
                  type="url"
                  id="youtubeUrl"
                  name="youtubeUrl"
                  value={formData.youtubeUrl || ""}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter YouTube channel link"
                />
              </div>
              <div>
                <label
                  htmlFor="githubUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  GitHub
                </label>
                <input
                  type="url"
                  id="githubUrl"
                  name="githubUrl"
                  value={formData.githubUrl || ""}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter GitHub profile link"
                />
              </div>
              <div>
                <label
                  htmlFor="instagramUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Instagram
                </label>
                <input
                  type="url"
                  id="instagramUrl"
                  name="instagramUrl"
                  value={formData.instagramUrl || ""}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter Instagram profile link"
                />
              </div>
              <div>
                <label
                  htmlFor="facebookUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Facebook
                </label>
                <input
                  type="url"
                  id="facebookUrl"
                  name="facebookUrl"
                  value={formData.facebookUrl || ""}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-teal-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter Facebook profile link"
                />
              </div>
            </div>
          </div>

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

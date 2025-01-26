import { useState } from "react";

export default function Experience() {
  const [formData, setFormData] = useState({
    role: "",
    jobTitle: "",
    description: "",
  });
  const [experiences, setExperiences] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  // Yeni deneyim ekleme
  const handleSubmit = (e) => {
    e.preventDefault();
    setExperiences([...experiences, formData]);
    setFormData({ role: "", jobTitle: "", description: "" });
  };

  // Düzenleme için modal açma
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditData(experiences[index]);
    setIsModalOpen(true);
  };

  // Düzenlemeyi kaydetme
  const handleSaveEdit = () => {
    const updatedExperiences = [...experiences];
    updatedExperiences[editingIndex] = editData;
    setExperiences(updatedExperiences);
    setIsModalOpen(false);
    setEditData(null);
    setEditingIndex(null);
  };

  // Düzenleme modalını kapatma
  const closeModal = () => {
    setIsModalOpen(false);
    setEditData(null);
    setEditingIndex(null);
  };

  // Input değişikliklerini yakalama
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Silme fonksiyonu
  const handleDelete = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  return (
    <div className="h-full w-full overflow-y-auto p-6">
      {/* Yeni Deneyim Ekleme Formu */}
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-teal-600 text-center mb-4">
          Add Experience
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-teal-600"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter role"
            />
          </div>
          <div>
            <label
              htmlFor="jobTitle"
              className="block text-sm font-medium text-teal-600"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter job title"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-teal-600"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Write a brief description"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Save Experience
          </button>
        </form>
      </div>

      <p className="text-2xl font-semibold text-teal-600 text-center py-6 mb-[30px] border-b-2 border-teal-300 w-full">Experience List</p>

      {/* Deneyim Listesi */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div>
              <h3 className="text-xl font-semibold text-teal-600">
                {experience.role}
              </h3>
              <p className="text-gray-600 text-sm font-medium">
                {experience.jobTitle}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                {experience.description}
              </p>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => handleEdit(index)}
                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Düzenleme Modalı */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-6 w-96">
            <h2 className="text-xl font-bold text-teal-600 mb-4">
              Edit Experience
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="editRole"
                  className="block text-sm font-medium text-teal-600"
                >
                  Role
                </label>
                <input
                  type="text"
                  id="editRole"
                  name="role"
                  value={editData?.role || ""}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-3 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter role"
                />
              </div>
              <div>
                <label
                  htmlFor="editJobTitle"
                  className="block text-sm font-medium text-teal-600"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="editJobTitle"
                  name="jobTitle"
                  value={editData?.jobTitle || ""}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-3 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter job title"
                />
              </div>
              <div>
                <label
                  htmlFor="editDescription"
                  className="block text-sm font-medium text-teal-600"
                >
                  Description
                </label>
                <textarea
                  id="editDescription"
                  name="description"
                  value={editData?.description || ""}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-3 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Write a brief description"
                  rows="4"
                />
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                >
                  Save
                </button>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

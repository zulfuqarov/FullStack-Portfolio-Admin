import React, { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AdminContext } from "../context/ContextAdmin";
import { toast } from "react-toastify";
const Projects = () => {
  const { data, updatePortfolio } = useContext(AdminContext);
  const [formData, setFormData] = useState({
    title: "",
    position: "",
    description: "",
    projectUrl: "",
  });
  const [projects, setProjects] = useState([...data.projects]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.title ||
      formData.position ||
      formData.description ||
      formData.projectUrl
    ) {
      updatePortfolio({
        projects: [...projects, formData],
      });
      setFormData({ title: "", position: "", description: "", projectUrl: "" });
    } else {
      toast.error("Please fill out at least one field.");
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditData(projects[index]);
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    updatePortfolio({
      projects: [...updatedProjects],
    });
  };

  const handleSaveEdit = () => {
    const updatedProjects = [...projects];
    updatedProjects[editingIndex] = editData;
    setIsModalOpen(false);
    setEditData(null);
    setEditingIndex(null);
    updatePortfolio({
      projects: [...updatedProjects],
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditData(null);
    setEditingIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="h-full w-full overflow-y-auto p-6">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-teal-600 text-center mb-4">
          Add Project
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-teal-600"
            >
              Project Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter project title"
            />
          </div>
          <div>
            <label
              htmlFor="position"
              className="block text-sm font-medium text-teal-600"
            >
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter position"
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
          <div>
            <label
              htmlFor="projectUrl"
              className="block text-sm font-medium text-teal-600"
            >
              Project URL
            </label>
            <input
              type="url"
              id="projectUrl"
              name="projectUrl"
              value={formData.projectUrl}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter project URL"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Save Project
          </button>
        </form>
      </div>

      <p className="text-2xl font-semibold text-teal-600 text-center py-6 border-b-2 border-teal-300 w-full mb-[30px]">
        Project List
      </p>

      <div className="max-w-[800px] mx-auto space-y-4 p-4">
        {data.projects &&
          data.projects.map((project, index) => (
            <div className="flex flex-col md:flex-row md:items-start md:justify-between border-b border-gray-300 shadow-lg p-5 mb-5 rounded-lg">
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-teal-600">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm font-medium">
                  <strong>Position:</strong> {project.position}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-full md:max-w-[500px] line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-3 mt-4 md:mt-0 md:self-end">
                <button
                  onClick={() => handleEdit(index)}
                  className="group flex items-center px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 hover:shadow-lg transition-all"
                >
                  <AiOutlineEdit className="mr-2 group-hover:scale-110 transition-transform" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="group flex items-center px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-lg shadow hover:bg-red-700 hover:shadow-lg transition-all"
                >
                  <AiOutlineDelete className="mr-2 group-hover:scale-110 transition-transform" />
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-6 w-96">
            <h2 className="text-xl font-bold text-teal-600 mb-4">
              Edit Project
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="editTitle"
                  className="block text-sm font-medium text-teal-600"
                >
                  Project Title
                </label>
                <input
                  type="text"
                  id="editTitle"
                  name="title"
                  value={editData?.title || ""}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-3 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter project title"
                />
              </div>
              <div>
                <label
                  htmlFor="editPosition"
                  className="block text-sm font-medium text-teal-600"
                >
                  Position
                </label>
                <input
                  type="text"
                  id="editPosition"
                  name="position"
                  value={editData?.position || ""}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-3 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter position"
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
              <div>
                <label
                  htmlFor="editProjectUrl"
                  className="block text-sm font-medium text-teal-600"
                >
                  Project URL
                </label>
                <input
                  type="url"
                  id="editProjectUrl"
                  name="projectUrl"
                  value={editData?.projectUrl || ""}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-3 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter project URL"
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
};

export default Projects;

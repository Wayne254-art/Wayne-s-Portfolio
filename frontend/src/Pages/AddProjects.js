import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsideBar from '../Components/AsideBar';
import { submitProject } from '../store/project.reducers';

const AddProjects = () => {
    const dispatch = useDispatch();
    const projectStatus = useSelector((state) => state.projects.status);
    const error = useSelector((state) => state.projects.error);

    const [formData, setFormData] = useState({
        title: '',
        language: '',
        image: null,
        videoLink: '',
        liveSite: '',
        descriptions: [''],
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleDescriptionChange = (index, value) => {
        const newDescriptions = [...formData.descriptions];
        newDescriptions[index] = value;
        setFormData({ ...formData, descriptions: newDescriptions });
    };

    const addDescriptionField = () => {
        setFormData({ ...formData, descriptions: [...formData.descriptions, ''] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);
        data.append('language', formData.language);
        data.append('image', formData.image);
        data.append('videoLink', formData.videoLink);
        data.append('liveSite', formData.liveSite);
        formData.descriptions.forEach((desc, index) => {
            data.append(`descriptions[${index}]`, desc);
        });

        dispatch(submitProject(data));
    };

    return (
        <div className="flex bg-gray-900 text-white min-h-screen">
            <AsideBar />
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg my-8 shadow-md flex-1 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Project Title */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-sm font-medium text-[#d0d2d6]">Project Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 rounded bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter project title"
                            required
                        />
                    </div>

                    {/* Project Language */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-sm font-medium text-[#d0d2d6]">Project Language</label>
                        <input
                            type="text"
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 rounded bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter project language"
                            required
                        />
                    </div>

                    {/* Image Upload with Preview */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-sm font-medium text-[#d0d2d6]">Project Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full p-3 border border-gray-700 rounded bg-gray-900"
                        />
                        {imagePreview && (
                            <div className="mt-4">
                                <img src={imagePreview} alt="Selected Preview" className="w-full h-64 object-cover rounded-lg shadow-md" />
                            </div>
                        )}
                    </div>

                    {/* Video Link */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-sm font-medium text-[#d0d2d6]">Video Link</label>
                        <input
                            type="url"
                            name="videoLink"
                            value={formData.videoLink}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 rounded bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="https://youtube.com/..."
                            required
                        />
                    </div>

                    {/* Live Site URL */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-sm font-medium text-[#d0d2d6]">Live Site URL</label>
                        <input
                            type="url"
                            name="liveSite"
                            value={formData.liveSite}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 rounded bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="https://yourproject.com/..."
                            required
                        />
                    </div>

                    {/* Project Descriptions */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-sm font-medium text-[#d0d2d6]">Project Descriptions</label>
                        {formData.descriptions.map((desc, index) => (
                            <input
                                key={index}
                                type="text"
                                value={desc}
                                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                className="w-full p-3 border border-gray-700 rounded bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder={`Description ${index + 1}`}
                            />
                        ))}
                        <button type="button" onClick={addDescriptionField} className="mt-2 text-blue-600">
                            + Add Another Description
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg">
                        {projectStatus === 'loading' ? 'Submitting...' : 'Submit Project'}
                    </button>

                    {/* Display Error Message */}
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default AddProjects;

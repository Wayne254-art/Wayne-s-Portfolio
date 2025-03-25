import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    // Fetch projects from the backend
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/all-projects');
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section className="bg-gray-100 py-16 px-6">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
                <p className='text-2xl font-bold text-blue-500 mb-4'>Check-Out My Projects and Place Your Feedback</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project._id} // Use _id from MongoDB as the key
                            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className='flex flex-row items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                                            {project.language}
                                        </h2>
                                        <h2 className="text-md font-bold text-gray-800 mb-2">
                                            {project.language}
                                        </h2>
                                    </div>
                                    <span className="text-gray-600 text-sm flex items-center">
                                        <MdFavoriteBorder className='text-blue-500 mr-1 text-2xl' />
                                        {project.likes}
                                    </span>
                                </div>
                                <p className="text-sm text-blue-500 font-semibold mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-sm flex items-center cursor-pointer hover:underline">
                                        <FaCommentDots className='text-blue-500 mr-1 text-2xl cursor-pointer' />
                                        {project.likes}
                                    </span>
                                    <button className="flex flex-row items-center justify-center text-blue-500 font-semibold text-sm border bg-black p-2 rounded-md hover:bg-gray-700">
                                        Project Details
                                        <IoMdArrowRoundForward className='ml-2 text-2xl' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
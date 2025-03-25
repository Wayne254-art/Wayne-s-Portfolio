// controllers/projectController.js
const Project = require("../models/project.model");

// Create a new project
exports.createProject = async (req, res) => {
    try {
        const { title, language, videoLink, liveSite, descriptions } = req.body;

        // Construct image URL from uploaded file
        const image = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;

        if (!title || !language || !image || !videoLink || !liveSite || !descriptions) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newProject = await Project.create({
            title,
            language,
            image,
            videoLink,
            liveSite,
            descriptions: JSON.stringify(descriptions), // Store descriptions as JSON string
        });

        res.status(201).json(newProject);
    } catch (error) {
        console.error("Error creating project:", error); // Log the actual error for debugging
        res.status(500).json({ message: "Server error", error });
    }
};

// Get all projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Get a project by ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found." });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Delete a project by ID
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.destroy({ where: { id: req.params.id } });
        if (!project) {
            return res.status(404).json({ message: "Project not found." });
        }
        res.status(200).json({ message: "Project deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project.controller");
const multer = require("multer");
const path = require("path"); // Ensure 'path' is imported

// Set up Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Save uploaded files in the 'uploads/' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
    },
});

// Multer configuration
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);

        if (extname && mimeType) {
            cb(null, true); // Accept file
        } else {
            cb("Error: Only images are allowed!"); // Reject if not an image
        }
    },
});

// Routes
router.post("/upload-project", upload.single("image"), projectController.createProject); // Create project with image upload
router.get("/all-projects", projectController.getProjects); // Get all projects
router.get("/project-details/:projectId", projectController.getProjectById); // Get project by ID
router.delete("/delete-project/:projectId", projectController.deleteProject); // Delete project by ID

module.exports = router;

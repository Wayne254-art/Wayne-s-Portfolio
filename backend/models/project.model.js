// models/Project.js
const { DataTypes } = require("sequelize");
const sequelize = require('../db/database');

const Project = sequelize.define("Project", {
    projectId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    videoLink: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    liveSite: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descriptions: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Project;

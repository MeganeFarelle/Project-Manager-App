const express = require("express");
const {
  createProject,
  getAllProjects,
  getOneProject,
  voteProject,
  commentProject,
  deleteProject,
} = require("../controller/project.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const projectRouter = express.Router();

// Toutes les routes sont protégées par JWT
projectRouter.use(authMiddleware);


projectRouter.post("/create", createProject);
projectRouter.get("/all", getAllProjects);
projectRouter.get("/:id", getOneProject);
projectRouter.delete("/delete/:id", deleteProject);


projectRouter.post("/vote/:id", voteProject);
projectRouter.post("/comment/:id", commentProject);

module.exports = projectRouter;

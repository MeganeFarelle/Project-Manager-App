const express = require("express");
const {
  loginUser,
  createUser,
  getAllUsers,
  getOneUser,
  deleteUser,
} = require("../controller/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const userRouter = express.Router();


userRouter.post("/login", loginUser);
userRouter.post("/create", createUser);

// Routes protégées (nécessitent token)
userRouter.use(authMiddleware);

userRouter.get("/all", getAllUsers);
userRouter.get("/:id", getOneUser);
userRouter.delete("/delete/:id", deleteUser);

module.exports = userRouter;

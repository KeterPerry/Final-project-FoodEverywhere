import express from "express";
import {
  signUpUser,
  logoutUser,
  logoutAll,
  deleteUser,
  getUserProfile,
  editProfile,
  loginUser,
  updateScore,
} from "../controllers/user.controllers.js";
import { auth } from "../middleware/auth/auth.js";

const usersRouter = express.Router();

usersRouter.post("/signUp", signUpUser);
usersRouter.post("/login", loginUser);
usersRouter.post("/logout", auth, logoutUser);
usersRouter.post("/logoutAll", logoutAll);

usersRouter.get("/profile", auth, getUserProfile);
usersRouter.patch("/editProfile", auth, editProfile);
usersRouter.patch("/editScore", auth, updateScore);
usersRouter.delete("/deleteUser", auth, deleteUser);

export { usersRouter };

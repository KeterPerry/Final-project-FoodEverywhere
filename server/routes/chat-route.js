// const { catchErrors } = require("../handlers/errorHandlers");
import express from "express";
import {
  getAllChatrooms,
  createChatroom,
} from "../controllers/chatroom.controllers.js";
import { chatAuth } from "../middleware/auth/chatAuth.js";

const chatRouter = express.Router();

chatRouter.get("/", getAllChatrooms);
chatRouter.post("/", createChatroom);

export { chatRouter };

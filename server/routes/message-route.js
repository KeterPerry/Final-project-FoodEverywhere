import express from "express";
import { addMessage } from "../controllers/message.controller.js";

export const messageRouter = express.Router();

messageRouter.post("/newMessage", addMessage);

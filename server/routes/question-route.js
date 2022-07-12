import express from "express";
import {
  newQuestion,
  getAllQuestions,
} from "../controllers/question.controllers.js";

const questionsRouter = express.Router();

questionsRouter.post("/addQuestion", newQuestion);
questionsRouter.get("/getQuestions", getAllQuestions);

export { questionsRouter };

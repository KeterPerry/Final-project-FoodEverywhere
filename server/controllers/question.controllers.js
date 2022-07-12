import { Question } from "../models/question.js";

export const newQuestion = async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();

    res.status(200).send(newQuestion);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const getAllQuestions = async (req, res) => {
  try {
    const Qustions = await Question.find();
    res.status(200).send(Qustions);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

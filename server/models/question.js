import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },

  answers: {
    a: { type: String, required: true },
    b: { type: String, required: true },
    c: { type: String, required: true },
    d: { type: String, required: true },
  },
  correctAnswer: { type: String, required: true },
});

const Question = mongoose.model("Question", QuestionSchema);
export { Question };

// {
//     image: "https://www.pngkey.com/maxpic/u2q8w7q8o0t4t4o0/",
//     question: "what is that food?",
//     answers: {
//         a: "chips",
//         b: "pizza",
//         c:"hamburger",
//         d: "fish"
//     },
//     correctAnswer: "chips"

// }

// {
//     "image": "https://www.pngkey.com/maxpic/u2q8w7q8o0t4t4o0/",
//     "question": "what is that food?",
//     "answers": {
//         "a": "chips",
//         "b": "pizza",
//         "c":"hamburger",
//         "d": "fish",
//     },
//     "correctAnswer": "chips"

// }

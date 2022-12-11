import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  score: {
    type: Number,
    default: 0,
  },
  messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],

  foodItems: [{ type: mongoose.Types.ObjectId, ref: "FoodItems" }],
});

export { userSchema };

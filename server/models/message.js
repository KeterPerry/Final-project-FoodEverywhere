import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  room: {
    type: "string",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Chatroom is required!",
    ref: "users",
  },
  message: {
    type: String,
    required: "Message is required!",
  },
  time: {
    type: String,
  },
});

const Message = mongoose.model("Message", messageSchema);

export { Message };

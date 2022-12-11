import { Message } from "../models/message.js";
import { User } from "../models/user/user.model.js";
import mongoose from "mongoose";

export const addMessage = async (req, res) => {
  console.log(req.body);
  let existingUser;
  try {
    existingUser = await User.findById(req.body.user);
    if (!existingUser) {
      throw new Error("User has not been found");
    }
    const newMessage = new Message({
      room: req.body.room,
      user: req.body.user,
      message: req.body.message,
      time: req.body.time,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    await newMessage.save({ session });
    existingUser.messages.push(newMessage);
    await existingUser.save({ session });
    await session.commitTransaction();

    res.status(200).send({ data: newMessage });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

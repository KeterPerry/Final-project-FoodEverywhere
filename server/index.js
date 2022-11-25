import { app } from "./app.js";
import "./db/mongoose.js";
import "./models/user/user.schema.js";

import http from "http";
import { User } from "../server/models/user/user.model.js";
import { Message } from "../server/models/message.js";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
// import ws from "socket.io";

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`The server is up and running on port ${PORT}`)
);

//////////////////////////////////////////////////
// const io = ws(server, {
//   allowEIO3: true,
//   cors: {
//     origin: true,
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

////////////////////////////////////////////////

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

////////////////////////////////////
// io.on("connection", (socket) => {
//   console.log("Connected: " + socket.userId);
// });
// io.listen(PORT);
//////////

// const Message = mongoose.model("Message");
// const User = mongoose.model("users");

// io.use(async (socket, next) => {
// console.log("bla");
//   try {
//     const token = socket.handshake.query.token;
//     console.log(token);
//     const payload = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
//     console.log(process.env.JWT_TOKEN_SECRET);
//     console.log(payload);
//     socket.userId = payload._id;
//     next();
//   } catch (err) {}
// });

// io.on("connection", (socket) => {
//   console.log("Connected: " + socket.userId);

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // socket.on("joinRoom", ({ chatroomId }) => {
  //   socket.join(chatroomId);
  //   console.log("A user joined chatroom: " + chatroomId);
  // });

  // socket.on("leaveRoom", ({ chatroomId }) => {
  //   socket.leave(chatroomId);
  //   console.log("A user left chatroom: " + chatroomId);
  // });

  // socket.on("chatroomMessage", async ({ chatroomId, message }) => {
  //   console.log("chatroomMessage");
  //   if (message.trim().length > 0) {
  //     const user = await User.findOne({ _id: socket.userId });
  //     const newMessage = new Message({
  //       chatroom: chatroomId,
  //       user: socket.userId,
  //       message,
  //     });
  //     io.to(chatroomId).emit("newMessage", {
  //       message,
  //       name: user.name,
  //       userId: socket.userId,
  //     });
  //     await newMessage.save();
  //   }
  // });

  ////////////////////////////////////////////////////////////////////

  socket.on("join_room", (data) => {
    console.log(data);
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
  });

  // socket.on("disconnect", () => {
  //   console.log("Disconnected: " + socket.userId);
  // });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });

  /////////////////////////////////////////////////////////////////
});

//   socket.on("send_message", (data) => {
//     console.log("brrrr");
//     socket.to(data.chatroomId).emit("receive_message", data.message);
//   });
// });

// front
// const messages = localStorage.setItem("messages", [...message]);
// socket.emit("send_message", { message, room });
// };
////front
// socket.on(
//   "receive_message",
//   (data) => {
//     setMessageReceived(data.message);
//   },
//   [socket]

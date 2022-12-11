import { app } from "./app.js";
import "./db/mongoose.js";
import "./models/user/user.schema.js";
import http from "http";
// import { User } from "../server/models/user/user.model.js";
// import { Message } from "../server/models/message.js";
import { Server } from "socket.io";
import "./scrapper.js";
import jwt from "jsonwebtoken";

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`The server is up and running on port ${PORT}`)
);

////////////////////////////////////////////////

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

////////////////////////////////////

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    console.log(data);
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });

  /////////////////////////////////////////////////////////////////
});

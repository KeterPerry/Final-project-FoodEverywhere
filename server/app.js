import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { usersRouter } from "./routes/users-routes.js";
import { chatRouter } from "./routes/chat-Route.js";
// import { messageRouter } from "./routes/message-Route.js";
import { contactRouter } from "./routes/contact-route.js";
import { questionsRouter } from "./routes/question-route.js";
// import "dotenv/config.js";

// console.log(process.env.MONGO_USER);

export const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicPath = path.join(__dirname, "../client/build");

app.use(express.static(publicPath));
console.log(publicPath);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/users", usersRouter);
app.use("/contact", contactRouter);
app.use("/chat", chatRouter);
// app.use("/messages", messageRouter);
app.use("/questions", questionsRouter);

//Setup Error Handlers
// const errorHandlers = require("./handlers/errorHandlers");
// app.use(errorHandlers.notFound);
// app.use(errorHandlers.mongoseErrors);
// if (process.env.ENV === "DEVELOPMENT") {
//   app.use(errorHandlers.developmentErrors);
// } else {
//   app.use(errorHandlers.productionErrors);
// }

// module.exports = app;

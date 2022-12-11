import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { usersRouter } from "./routes/users-routes.js";
import { contactRouter } from "./routes/contact-route.js";
import { foodRouter } from "./routes/foodItem-route.js";
import { questionsRouter } from "./routes/question-route.js";
import { messageRouter } from "./routes/message-route.js";
import { popularFoodRouter } from "./routes/popularFood-route.js";

export const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicPath = path.join(__dirname, "../client/build");

app.use(express.static(publicPath));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

//////////////////routes

app.use("/users", usersRouter);
app.use("/contact", contactRouter);
app.use("/questions", questionsRouter);
app.use("/interestingFood", foodRouter);
app.use("/messages", messageRouter);
app.use("/popularFood", popularFoodRouter);

import mongoose from "mongoose";
import "dotenv/config.js";

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.hzorb.mongodb.net/No-name?retryWrites=true&w=majority`,
  (error, mongoConnectionInstance) => {
    if (error) throw Error("Mongoose Connection!!, Error: " + error);
    if (!process.env.NODE_ENV) {
      const { host, port, name } = mongoConnectionInstance;
      console.log({ host, port, name });
    }
  }
);

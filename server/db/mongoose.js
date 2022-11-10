import mongoose from "mongoose";
import "dotenv/config.js";

// "mongodb+srv://keterpe:UDCo1zNBzelotbGh@cluster0.hzorb.mongodb.net/?retryWrites=true&w=majority";
// `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.hzorb.mongodb.net/?retryWrites=true&w=majority`,
// console.log(
//   `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.hzorb.mongodb.net/No-name?retryWrites=true&w=majority`
// );

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

// mongodb+srv://keterpe:<password>@cluster0.hzorb.mongodb.net/?retryWrites=true&w=majority

// mongoose
//   .connect(
//     "mongodb+srv://sahul:FEmG5ZQcSav3DndD@cluster0.alht5.mongodb.net/imageData?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("connected successfully"))
//   .catch((err) => console.log("it has an error", err));

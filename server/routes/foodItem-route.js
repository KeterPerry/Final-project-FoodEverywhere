import express from "express";
import {
  addFoodItem,
  getSpecificfood,
  getAllFoods,
  editFood,
  deleteFood,
} from "../controllers/foodItem.controllers.js";
import multer from "multer";

const foodRouter = express.Router();

///////////////////multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// const upload = multer({
//   dest: "uploads",
// });

const upload = multer({ storage: storage });

////////////////////////////////////////////////

foodRouter.post("/add", upload.single("image"), addFoodItem);
foodRouter.get("/getfood", getSpecificfood);
foodRouter.get("/getAllfoods", getAllFoods);
foodRouter.patch("/editfood/:id", editFood);
foodRouter.delete("/deletefood/:id", deleteFood);

export { foodRouter };

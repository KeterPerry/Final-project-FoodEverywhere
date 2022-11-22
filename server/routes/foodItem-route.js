import express from "express";
import {
  addFoodItem,
  getSpecificfood,
  getAllFoods,
  editFood,
  deleteFood,
} from "../controllers/foodItem.controllers.js";
import { upload } from "../middleware/multer/multer.js";

const foodRouter = express.Router();

////////////////////////////////////////////////

foodRouter.post("/add", upload.single("image"), addFoodItem);
foodRouter.get("/getfood", getSpecificfood);
foodRouter.get("/getAllfoods", getAllFoods);
foodRouter.patch("/editfood/:id", editFood);
foodRouter.delete("/deletefood/:id", deleteFood);

export { foodRouter };

// ./client/public/uploads/

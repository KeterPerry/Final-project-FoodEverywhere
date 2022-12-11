import express from "express";
import {
  addFoodItem,
  getSpecificfood,
  getAllFoods,
  editFood,
  deleteFood,
  getFoodItemsById,
} from "../controllers/foodItem.controllers.js";
import { upload } from "../middleware/multer/multer.js";

const foodRouter = express.Router();

////////////////////////////////////////////////

foodRouter.post("/add", upload.single("image"), addFoodItem);
foodRouter.get("/getfood", getSpecificfood);
foodRouter.get("/getAllfoods", getAllFoods);
foodRouter.get("/users/:id", getFoodItemsById);
foodRouter.patch("/editfood/:id", editFood);
foodRouter.delete("/deletefood/:id", deleteFood);

export { foodRouter };

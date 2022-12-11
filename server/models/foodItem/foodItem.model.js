import mongoose from "mongoose";
import { foodItemSchema } from "./foodItem-schema.js";

const FoodItem = mongoose.model("FoodItems", foodItemSchema);

export { FoodItem };

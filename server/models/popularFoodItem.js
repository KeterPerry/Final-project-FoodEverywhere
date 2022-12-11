import mongoose from "mongoose";

const popularFoodItem = new mongoose.Schema({
  foodName: {
    type: String,
  },
  foodImage: {
    type: String,
  },
  foodDescription: {
    type: String,
  },
});

const PopularFoodItem = mongoose.model("PopularFood", popularFoodItem);
export default PopularFoodItem;

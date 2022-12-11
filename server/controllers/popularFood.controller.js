import PopularFoodItem from "../models/popularFoodItem.js";

export const getPopularFood = async (req, res) => {
  try {
    const allPopularFood = await PopularFoodItem.find();
    res.status(200);
    res.send(allPopularFood);
  } catch (err) {
    res.send(err.message);
  }
};

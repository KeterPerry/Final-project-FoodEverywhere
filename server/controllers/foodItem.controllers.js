import { FoodItem } from "../models/foodItem/foodItem.model.js";
import fs from "fs";

// export const addFoodItem = async (req, res) => {
//   try {
//     const newFoodItem = FoodItem({
//       itemsName: req.body.itemsName,
//       image: {
//         data: fs.readFileSync("uploads/" + req.file.filename),
//         contentType: "image/png",
//       },
//       description: req.body.description,
//     });
//     const savedFoodItem = await newFoodItem.save();
//     res.status(200).send({ data: savedFoodItem });
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

export const getSpecificfood = async (req, res) => {
  try {
    const { id: FoodId } = req.params;
    const foodItem = await FoodItem.findById({ _id: FoodId });
    console.log(foodItem);
    if (!foodItem) throw new Error("food wasn't found!!");

    res.status(200).send({ data: foodItem });
  } catch (error) {
    console.error(error);
    res.send(error.message);
  }
};

export const getAllFoods = async (req, res) => {
  try {
    const allfoodItems = await FoodItem.find();
    res.status(200).send(allfoodItems);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteFood = async (req, res) => {
  console.log("bla");
  try {
    const FoodId = req.params.id;
    const foodItem = await FoodItem.findByIdAndDelete({ _id: FoodId });
    console.log(foodItem);
    if (!foodItem) throw new Error("food wasn't found!!");
    res.status(200).send({ data: foodItem });
  } catch (error) {
    // res.send(error.message);
  }
};
deleteFood();

export const editFood = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["itemsName", "image", "description"];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid updates!" });
    }

    const { id: foodId } = req.params;
    const foodFieldsToUpdate = req.body;
    console.log(req.body);

    const updatedFoodItem = await FoodItem.findByIdAndUpdate(
      { _id: foodId },
      foodFieldsToUpdate,
      { new: true }
    );
    res.status(200).send({ data: updatedFoodItem });
  } catch (error) {}
};
/////////////////////////////////////////

export const addFoodItem = async (req, res) => {
  try {
    console.log(req.body);
    const newFoodItem = new FoodItem({
      itemsName: req.body.itemsName,
      image: req.file.originalname,
      description: req.body.description,
    });
    const savedFoodItem = await newFoodItem.save();
    res.status(200).send({ data: savedFoodItem });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

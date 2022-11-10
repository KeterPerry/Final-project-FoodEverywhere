import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  itemsName: {
    type: String,
    required: true,
    minLength: 2,
  },
  image: {
    type: String,
    required: true,
  },

  // image: {
  //   data: Buffer,
  //   contentType: String,
  // },
  description: {
    type: String,
    // required: true,
    // minLength: 10,
  },
});

export { foodItemSchema };

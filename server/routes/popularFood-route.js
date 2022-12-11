import { getPopularFood } from "../controllers/popularFood.controller.js";
import express from "express";

export const popularFoodRouter = express.Router();

popularFoodRouter.get("/getPopularFood", getPopularFood);

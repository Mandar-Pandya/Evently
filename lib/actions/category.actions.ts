"use server";

import { CreateCategoryParams } from "@/types";
import { connectToDatabase } from "@/lib/database";
import Category from "@/lib/database/models/category.model";
// import { handleError } from "../utils";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    await connectToDatabase();

    const newCategory = await Category.create({ name: categoryName });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    // handleError(error)
    console.log(error, "error in createing category");
  }
};

export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const categories = await Category.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    // handleError(error)
    console.log(error, "error in getting all categories");
  }
};

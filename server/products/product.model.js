import { Schema, model } from "mongoose";

const productSchemaDef = {
  id: Number,
  title: String,
  category: String,
  upvotes: Number,
  status: String,
  description: String,
  comments: [
    {
      id: Number,
      content: String,
      user: {
        image: String,
        name: String,
        username: String,
      },
    },
  ],
};

const productSchema = new Schema(productSchemaDef);

export default model("Product", productSchema);

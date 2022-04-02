const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
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
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

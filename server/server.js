const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

// Create express app
const app = express();
app.use(cors());
app.use(express.json());

// Gets environment variables
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 9000;

// Connect to database
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Sets routes
const productsRouter = require("./products/product.controller.js");
app.use("/api/products", productsRouter);

// Listen to connection
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

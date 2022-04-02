import Product from "./product.model";
const router = require("express").Router();

router.route("/").get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});


export default router;
module.exports = router;

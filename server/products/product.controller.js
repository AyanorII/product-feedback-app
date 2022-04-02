const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send("hello")
})

export default router;
module.exports = router;

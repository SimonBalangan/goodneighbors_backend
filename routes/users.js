const express = require("express");
const router = express.Router();
//Controller importieren
const {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,getUserProducts
} = require("../controllers/users");

router.route("/users").get(getAllUsers).post(createUser);

router
  .route("/users/:id")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/users/:id/products").get(getUserProducts)

module.exports = router;

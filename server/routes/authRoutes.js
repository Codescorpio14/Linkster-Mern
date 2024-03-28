const express = require("express");
const {
  loginUser,
  createUser,
  logoutUser,
  deleteUser,
} = require("../controllers/auth");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/", logoutUser);
router.delete("/", deleteUser);

module.exports = router;

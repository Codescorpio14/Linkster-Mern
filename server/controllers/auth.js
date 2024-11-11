const User = require("../models/users");
const Links = require("../models/links");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const { name, country, email, password } = req.body;
  if (!name || !email || !password || !country) {
    res.status(400);
    throw new Error("Missing required fields");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(401);
    throw new Error("Duplicate User");
  }

  const user = await User.create(req.body);

  return res
    .status(201)
    .json({ success: true, msg: "User created Successfully" });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Missing required fields");
  }

  // Find User

  const user = await User.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  // Compare Password

  const comparedResult = await user.comparePassword(password);
  if (!comparedResult) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  // Generating Token

  const token = await user.JwtToken();
  res
    .cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    })
    .status(200)
    .json({
      name: user.name,
      role: user.role,
      email: user.email,
      country: user.country,
      memberSince: user.createdAt,
    });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("jwt", { httpOnly: true });
  res.json({ msg: "logged out successfully" });
});

const deleteUser = asyncHandler(async (req, res) => {
  const token = req.cookies.jwt;

  const payload = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findByIdAndDelete(payload.userId);
  const link = await Links.deleteMany({ createdBy: payload.userId });

  res
    .json({ msg: "user deleted successfully" })
    .clearCookie("jwt", { httpOnly: true, secure: true, sameSite: "none" });
});

module.exports = { createUser, loginUser, logoutUser, deleteUser };

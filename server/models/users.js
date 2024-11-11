require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 4,
      maxlength: 20,
      require: true,
    },
    email: {
      type: String,
      require: [true, "Please provide an email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "member"],
      require: [true, "A role must be provided"],
      default: "member",
    },
    country: {
      type: String,
      require: [true, "Please provide a country"],
    },
    password: {
      type: String,
      require: [true, "please provide a valid password"],
      minlength: 6,
    },
  },
  { timestamps: true }
);

// Hash Password

userSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    console.log(error);
    throw new Error("Error hashing password");
  }
});

// Create Token

userSchema.methods.JwtToken = async function () {
  try {
    const payload = { userId: this._id, name: this.name };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2D" });
  } catch (error) {
    console.log(error);
    throw new Error("Error generating token");
  }
};

// Compare Password

userSchema.methods.comparePassword = async function (inputPass) {
  try {
    return await bcrypt.compare(inputPass, this.password);
  } catch (error) {
    console.log(error);
    throw new Error("Error generating token");
  }
};

module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const linksSchema = mongoose.Schema(
  {
    site: {
      type: String,
      require: true,
      enum: ["youtube", "linkedin", "facebook", "github"],
    },
    link: {
      type: String,
      require: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Links", linksSchema);

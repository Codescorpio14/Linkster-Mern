const mongoose = require("mongoose");

const db = async () => {
  await mongoose.connect(process.env.DATABASE_URL);
};
module.exports = db;

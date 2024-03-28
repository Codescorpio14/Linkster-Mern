const express = require("express");
const { allUsers } = require("../controllers/public");

const router = express.Router();

router.route("/all").get(allUsers);

module.exports = router;

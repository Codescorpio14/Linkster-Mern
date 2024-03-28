const express = require("express");
const {
  getUserLinks,
  addLink,
  getOneLink,
  deleteLink,
  updateLink,
} = require("../controllers/links");

const router = express.Router();

router.route("/").get(getUserLinks).post(addLink);
router.route("/:id").get(getOneLink).delete(deleteLink).patch(updateLink);

module.exports = router;

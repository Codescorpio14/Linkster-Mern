const Links = require("../models/links");
const User = require("../models/users");
const asyncHandler = require("express-async-handler");

const getUserLinks = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const links = await Links.find({ createdBy: userId });
  return res.status(200).json({ success: true, links, count: links.length });
});

const getOneLink = asyncHandler(async (req, res) => {
  const {
    params: { id },
    user: { userId },
  } = req;

  const link = await Links.find({ _id: id, createdBy: userId });
  if (!link) {
    res.json({ msg: "link not found by matching id" });
  }

  return res.status(200).json({ success: true, link });
});

const addLink = asyncHandler(async (req, res) => {
  const {
    user: { userId },
    body: { site, link },
  } = req;

  if (!site || !link) {
    return res.status(404).json({ msg: "data not provided" });
  }

  const links = await Links.create({ ...req.body, createdBy: userId });
  return res.status(201).json({ success: true, msg: "Link added" });
});

const deleteLink = asyncHandler(async (req, res) => {
  const {
    params: { id },
    user: { userId },
  } = req;

  const link = await Links.deleteOne({ _id: id, createdBy: userId });
  if (!link) {
    res.json({ msg: "link not found by matching id" });
  }
  return res.status(200).json({
    success: true,
    msg: `successfully deleted link`,
  });
});

const updateLink = asyncHandler(async (req, res) => {
  const {
    user: { userId },
    params: { id },
    body: { site, link },
  } = req;

  if (!site || !link) {
    return res.status(404).json({ msg: "data not provided" });
  }

  const links = await Links.findOneAndUpdate(
    { createdBy: userId, _id: id },
    { ...req.body },
    { validate: true }
  );

  return res.status(201).json({ success: true, msg: "Updated successfully" });
});

module.exports = {
  getUserLinks,
  getOneLink,
  addLink,
  deleteLink,
  updateLink,
};

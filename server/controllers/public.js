const User = require("../models/users");
const Links = require("../models/links");
const asyncHandler = require("express-async-handler");

const allUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}, { name: 1, country: 1, role: 1, _id: 1 });
  const links = await Links.find();

  const userData = [];

  for (const user of users) {
    const userLinks = [];
    for (const link of links) {
      if (link.createdBy == user.id) {
        userLinks.push({ link: link.link, site: link.site });
      }
    }
    userData.push({
      name: user.name,
      country: user.country,
      role: user.role,
      id: user.id,
      links: userLinks,
    });
  }

  return res.status(200).json({ success: true, data: userData });
});

module.exports = { allUsers };

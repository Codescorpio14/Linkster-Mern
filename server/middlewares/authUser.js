const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authUser = asyncHandler(async (req, res, next) => {
  const authToken = req.cookies.jwt;

  if (!authToken) {
    res
      .status(401)
      .clearCookie("jwt", { httpOnly: true, secure: true, sameSite: "lax" });
    throw new Error("invalid authorization token");
  }
  const payload = jwt.verify(authToken, process.env.JWT_SECRET);
  req.user = { userId: payload.userId, name: payload.name };
  next();
});

module.exports = authUser;

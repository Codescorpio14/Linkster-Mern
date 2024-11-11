require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const rateLimiter = require("express-rate-limit");

// Imports

const db = require("./db/connentdb");
const linkRoutes = require("./routes/linkRoutes");
const authRoutes = require("./routes/authRoutes");
const publicRoutes = require("./routes/publicRoutes");
const authUser = require("./middlewares/authUser");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middlewares

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://linkstar-alvir.netlify.app"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Routes

app.use("/api/v1/links", authUser, linkRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/public", publicRoutes);

// Error Handler

app.use(errorHandler);

// Starting Server

async function start() {
  try {
    await db();
    app.listen(process.env.PORT, () =>
      console.log(`Server is live on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
}
start();

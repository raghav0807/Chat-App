// const express = require("express");
import express from "express";
import dotenv from "dotenv";

import connectToMongoDB from "./db/connectToMongoDB.js";

import messageRoutes from "./routes/message.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import cookieParser from "cookie-parser";
// const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// app.get("/api/auth/signup", (req, res) => {
//   console.log("sign up route");
// });

// app.get("/api/auth/logout", (req, res) => {
//   console.log("logout route");
// });

// app.get("/api/auth/login", (req, res) => {
//   console.log("log in route");
// });

app.listen(PORT, () => {
  connectToMongoDB();

  console.log(`Server Running on port ${PORT}`);
});

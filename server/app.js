const fs = require("fs");
const path = require("path");

const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const placesRouter = require("./routes/place-router");
const userRouter = require("./routes/user-router");

const HttpError = require("./models/error");

const app = express();

app.use(bodyParser.json());

app.use("/images", express.static(path.join("images")));
// app.use("/images", express.static("images"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

// 배포 코드
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "public", "index.html"),
  });
});

app.use("/api/places", placesRouter);
app.use("/api/users", userRouter);

app.use((error, req, res, next) => {
  if (req && req.file) {
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message });
});

mongoose
  .connect(process.env.MONGO_URL)

  .then(() => {
    app.listen(process.env.PORT || 8000);
    console.log("몽구스 연결 성공");
  })
  .catch((err) => {
    console.log("몽구스 연결 에러", err);
  });

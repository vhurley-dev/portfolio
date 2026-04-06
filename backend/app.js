const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const todosRoutes = require("./routes/todos");
const serverHealthRoutes = require("./routes/serverHealth");

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Connection to database failed");
    console.error(err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS",
  );
  next();
});

app.use("/health", serverHealthRoutes);

app.use("/api/todos", todosRoutes);

module.exports = app;

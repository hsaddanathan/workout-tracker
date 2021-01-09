const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT= process.env.PORT || 3000;

const app = express();

//Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serves Up public Directory
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true });

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });
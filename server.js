const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const apiRoutes= require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

const PORT= process.env.PORT || 8080;

const app = express();

//Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serves Up public Directory
app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoutes);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });
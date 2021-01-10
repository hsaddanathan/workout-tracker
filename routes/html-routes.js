const express = require('express');
const router = express.Router();
const path = require("path");

router.get("/", function(req,res) {
    res.sendFile(path.join(__dirname,"../public/index.html"));
  });

  // page to add exercises to workouts
router.get("/exercise", function(req,res) {
    res.sendFile(path.join(__dirname,"../public/exercise.html"));
  });

  // page to view the stats of the workouts
  router.get("/stats", function(req,res) {
    res.sendFile(path.join(__dirname,"../public/stats.html"));
  });


  module.exports = router;
const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

// Get burger list
router.get("/", function(req, res) {
    burger.all(function(burgers) {
        burgers,
        console.log(burgers);
        res.render("index", burgers);
      });});

module.exports = router;
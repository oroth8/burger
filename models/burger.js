const orm = require("../config/orm");

var burger = {
    all: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(burgerName, devoured, cb) {
      orm.insertOne(burgerName, devoured, function(res) {
        cb(res);
      });
    },
    update: function(colName, value, condCol, condValue, cb) {
      orm.update(colName, value, condCol, condValue, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
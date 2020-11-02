const connection = require("./connection");
const mysql = require("mysql");

const orm = {
    selectAll: function(){
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });},

    insertOne: function(burgerName, devoured){
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
    connection.query(queryString, [burgerName, devoured], function(err, result) {
      if (err) throw err;
      console.log(result);
    });},

    updateOne: function(colName, value, condCol, condVal) {
        var queryString = "UPDATE burgers SET ?? = (?) WHERE ?? = (?);";
        connection.query(queryString, [colName, value, condCol, condVal], function(err, result) {
            if (err) throw err;
            console.log(result);
        });}
}

module.exports = orm;

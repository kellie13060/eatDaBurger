var connection = require("../config/connection.js");



var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (burgerName, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burgerName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (devoured, burgerId, cb) {
        var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
        connection.query(queryString, [devoured, burgerId], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
};

module.exports = orm;
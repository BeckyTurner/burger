var orm = require("../config/orm.js");

var burger = {
	selectAll: function (table, cb) {
		orm.selectAll("burgers", function (res) {
			cb(res);
		});
	},
	insertOne: function (colName, valOfCol, cb) {
		orm.insertOne("burgers", colName, valOfCol, function (res) {
			cb(res);
		});
	},
	updateOne: function (valOfCol, condition, cb) {
		console.log(orm);
		orm.updateOne("burgers", valOfCol, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;

//dependencies
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//get all burgers from db
router.get("/", function (req, res) {
    burger.selectAll("burgers", function (data) {
        var burgerDataObj = {
            burgers: data
        };
        console.log(burgerDataObj);
        res.render("index", burgerDataObj);
    });
});

//add new burger
router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", [req.body.burger], function (err, result) {
        if (err) {
            console.log(err)
        }
        console.log("hitting post route")
        res.redirect("/");
    });
});

//update burgers when devoured
router.post("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    console.log(req.params.id);
    burger.updateOne({ devoured: req.body.devoured }, condition, function () {
        res.redirect('/');
    });
});

module.exports = router;
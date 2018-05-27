

var express = require("express");
var router = express.Router();


router.get("/api", function (req, res, next) {

	console.log("get api");

	res.send("API Works!");
})



module.exports = router;




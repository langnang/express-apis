var express = require("express");
var router = express.Router();

var imageHdslb = require("./../src/image.hdslb/index");

router.get("/", imageHdslb.default);

module.exports = router;

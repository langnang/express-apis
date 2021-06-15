var express = require("express");
var router = express.Router();

var animeBiliBili = require("./../src/anime.bilibili/index");

router.get("/timeline", animeBiliBili.timeline);
router.get("/indexes", animeBiliBili.indexes);
router.get("/playurl", animeBiliBili.playurl);

module.exports = router;

var express = require("express");
var router = express.Router();

var quoteVercel = require("./../src/quote.vercel");

router.get("/random", quoteVercel.random);
router.get("/random10", quoteVercel.random10);
router.get("/anime", quoteVercel.anime);
router.get("/character", quoteVercel.character);
router.get("/available", quoteVercel.available);

module.exports = router;

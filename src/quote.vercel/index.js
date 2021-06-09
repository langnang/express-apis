const axios = require("axios");
module.exports = {
  random: function (req, res, next) {
    axios({
      method: "get",
      url: "https://animechan.vercel.app/api/random"
    }).then((response) => res.json(response.data));
  },
  random10: function (req, res, next) {
    axios({
      method: "get",
      url: "https://animechan.vercel.app/api/quotes"
    }).then((response) => res.json(response.data));
  },
  anime: function (req, res, next) {
    axios({
      method: "get",
      url: "https://animechan.vercel.app/api/quotes/anime",
      params: {
        title: req.query.title
      }
    }).then((response) => res.json(response.data));
  },
  character: function (req, res, next) {
    axios({
      method: "get",
      url: "https://animechan.vercel.app/api/quotes/character",
      params: {
        name: req.query.name
      }
    }).then((response) => res.json(response.data));
  },
  available: function (req, res, next) {
    axios({
      method: "get",
      url: "https://animechan.vercel.app/api/available/anime"
    }).then((response) => res.json(response.data));
  }
};

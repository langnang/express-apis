const axios = require("axios");
module.exports = function (app) {
  app.use("/music.163", require("./music.163"));
  app.use("/anime.bilibili", require("./anime.bilibili"));
  app.use("/image", require("./image"));
  app.use("/image.hdslb", require("./image.hdslb"));
  app.use("/quote.vercel", require("./quote.vercel"));
  app.route("/proxy").get(function (req, res, next) {
    // console.log(req);
    // console.log(req.method);
    axios({
      method: req.method,
      url: req.query.proxy_url
    }).then((response) => {
      res.end(response.data);
    });
  });
};

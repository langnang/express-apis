var express = require("express");

var app = express();

app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  // res.header("Content-Type", "application/json");

  if (req.method.toLowerCase() === "options") {
    res.send(200);
  } else {
    next();
  }
});

app.get("/", function (req, res, next) {
  res.json({
    status: 200,
    statusText: "Success"
  });
});
app.use("/anime.bilibili", require("./routes/anime.bilibili"));
app.use("/image", require("./routes/image"));
app.use("/image.hdslb", require("./routes/image.hdslb"));
app.use("/music.163", require("./routes/music.163"));
app.use("/quote.vercel", require("./routes/quote.vercel"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.json({
    status: 400,
    statusText: "Not Found"
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

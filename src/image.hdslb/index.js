const axios = require("axios");
module.exports = {
  /**
   * 转换 BiliBili 图片为可引用
   */
  default: function (req, res, next) {
    axios({
      method: "get",
      url: req.query.url,
      responseType: "arraybuffer"
    }).then((response) => {
      res.set(response.headers); //把整个的响应头塞入更优雅一些
      res.end(response.data.toString("binary"), "binary"); //这句是关键，有两次的二进制转换
    });
  }
};

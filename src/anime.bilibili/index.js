const axios = require("axios");
module.exports = {
  /**
   * 新番时间表
   */
  timeline: function (req, res, next) {
    axios({
      method: "get",
      url: "https://bangumi.bilibili.com/web_api/timeline_global"
    }).then((response) => res.json(response.data));
  },
  /**
   * 番剧索引
   */
  indexes: function (req, res, next) {
    axios({
      method: "get",
      url: "https://api.bilibili.com/pgc/season/index/result",
      params: {
        season_version: -1,
        area: -1,
        is_finish: -1,
        copyright: -1,
        // -1:全部，1:免费
        season_status: 1,
        season_month: -1,
        year: -1,
        style_id: -1,
        order: 3,
        st: 1,
        sort: 0,
        // 页数
        page: req.query.page || 1,
        season_type: 1,
        // 条数
        pagesize: req.query.pagesize || 20,
        type: 1
      }
    }).then((response) => res.json(response.data));
  },
  /**
   * 播放地址
   */
  playurl: function (req, res, next) {
    axios({
      method: "get",
      url: "https://api.bilibili.com/pgc/player/web/playurl",
      params: {
        cid: 16224328,
        bvid: "BV1ox411Q7V7",
        qn: 0,
        type: "",
        otype: "json",
        ep_id: 103917,
        fourk: 1,
        fnver: 0,
        fnval: 80,
        session: "1ce3f1db61819e08616b746afee945d4"
      }
    }).then((response) => res.json(response.data));
  }
};

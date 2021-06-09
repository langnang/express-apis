const axios = require("axios");
const queryString = require("querystring");
const { weapi, linuxapi, eapi, decrypt } = require("./utils/crypto");
module.exports = {
  toplist: function (req, res, next) {
    axios({
      method: "get",
      url: "https://music.163.com/api/toplist"
    }).then((response) => res.json(response.data));
  },
  playlist_detail: function (req, res, next) {
    axios({
      method: "get",
      url: "https://music.163.com/api/v3/playlist/detail",
      params: {
        id: req.query.id,
        n: 100000,
        s: 8
      }
    }).then((response) => res.json(response.data));
  },
  playlist_catalogue: function (req, res, next) {
    axios({
      method: "post",
      url: "https://music.163.com/weapi/playlist/catalogue",
      data: queryString.stringify(weapi({ csrf_token: "" }))
    }).then((response) => res.json(response.data));
  },
  playlist_list: function (req, res, next) {
    axios({
      method: "post",
      url: "https://music.163.com/weapi/playlist/list",
      data: queryString.stringify(
        weapi({
          cat: req.query.cat || "全部",
          order: req.query.order || "hot",
          limit: req.query.pageSize || 50,
          offset: ((req.query.pageNum || 1) - 1) * (req.query.pageSize || 50),
          total: true,
          csrf_token: ""
        })
      )
    }).then((response) => res.json(response.data));
  },
  artist_list: function (req, res, next) {
    axios({
      method: "post",
      url: "https://music.163.com/weapi/v1/artist/list",
      data: queryString.stringify(
        weapi({
          initial: req.query.initial,
          offset: (req.query.pageNum - 1) * 100,
          limit: req.query.limit || 100,
          total: req.query.total || true,
          type: req.query.type,
          area: req.query.area,
          csrf_token: ""
        })
      )
    }).then((response) => res.json(response.data));
  },
  artist_top_song: function (req, res, next) {
    axios({
      method: "post",
      url: "https://music.163.com/weapi/artist/top/song",
      data: queryString.stringify(
        weapi({
          id: req.query.id,
          csrf_token: ""
        })
      )
    }).then((response) => res.json(response.data));
  },
  song_player_url: function (req, res, next) {
    axios({
      method: "post",
      url: "https://interface3.music.163.com/eapi/song/enhance/player/url",
      data: queryString.stringify(
        eapi("/api/song/enhance/player/url", {
          ids: JSON.stringify([req.query.id || ""]),
          br: "999000",
          csrf_token: ""
        })
      )
    }).then((response) => res.json(response.data));
  },
  song_lyric: function (req, res, next) {
    axios({
      method: "post",
      url: "https://music.163.com/api/song/lyric",
      data: `id=${req.query.id || ""}&lv=-1&kv=-1&tv=-1`
    }).then((response) => res.json(response.data));
  },
  song_detail: function (req, res, next) {
    axios({
      method: "post",
      url: "https://music.163.com/weapi/v3/song/detail",
      data: queryString.stringify(
        weapi({
          c: JSON.stringify(
            (req.query.ids || "").split(",").map((item) => {
              return { id: item };
            })
          ),
          csrf_token: ""
        })
      )
    }).then((response) => res.json(response.data));
  }
};

var express = require("express");
var router = express.Router();

var music163 = require("./../src/music.163/index");

router.get("/toplist", music163.toplist);
router.get("/playlist/detail", music163.playlist_detail);
router.get("/playlist/catalogue", music163.playlist_catalogue);
router.get("/playlist/list", music163.playlist_list);
router.get("/song/lyric", music163.song_lyric);
router.get("/song/detail", music163.song_detail);
router.get("/song/player/url", music163.song_player_url);
router.get("/artist/list", music163.artist_list);
router.get("/artist/top/song", music163.artist_top_song);

module.exports = router;

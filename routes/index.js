export default function router(app) {}

const videoRoutes = [];

const imageRoutes = [];

const audioRoutes = [];

const routs = [
  { path: "music", meta: {} },
  {
    path: "/music.qq",
    children: [{ path: "/toplist", callback: function () {} }]
  },
  {
    path: "/music.163"
  }
];

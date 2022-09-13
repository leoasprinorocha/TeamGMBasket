const proxy = [
  {
    context: "/api",
    target: [
      "https://localhost:44358/",
      "https://invest-easy-api.herokuapp.com/",
      "http://192.168.1.4:42000/"
    ],
    pathRewrite: { "^/api": "" },
  },
];
module.exports = proxy;

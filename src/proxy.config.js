const proxy = [
  {
    context: "/api",
    target: [
      "http://192.168.0.13:46000",
      "https://invest-easy-api.herokuapp.com/",
    ],
    pathRewrite: { "^/api": "" },
  },
];
module.exports = proxy;

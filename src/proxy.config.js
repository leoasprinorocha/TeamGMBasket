const proxy = [
  {
  context: '/api',
  target:'http://192.168.100.19:46000',
  pathRewrite: { '^/api': '' }
  }
  ];
  module.exports = proxy;

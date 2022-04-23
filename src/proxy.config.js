const proxy = [
  {
  context: '/api',
  target:'http://localhost:31964/',
  pathRewrite: { '^/api': '' }
  }
  ];
  module.exports = proxy;

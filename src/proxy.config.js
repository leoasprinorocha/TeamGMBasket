const proxy = [
  {
  context: '/api',
  target:['http://192.168.100.19:46000','http://gerenciaapi-001-site1.itempurl.com'],
  pathRewrite: { '^/api': '' }
  }
  ];
  module.exports = proxy;

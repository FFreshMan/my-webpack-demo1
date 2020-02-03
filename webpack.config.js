var path = require('path');

module.exports = {
  mode: 'production',
  //development 开发者模式
  entry: './src/index.js',
  //这个是个js源文件目录
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
    //这里是转译后输出目录
    //使用一个哈希编码来更新缓存
  }
};
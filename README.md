## 开始
```
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```
## 配置
```
module.exports = {
  mode: 'production',
  //development 开发者模式
  entry: './src/index.js',
  //这个是个js源文件目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
    //这里是转译后输出目录
    //使用一个哈希编码来更新缓存
  },
  plugins: [new HtmlWebpackPlugin()]
  //生成html并自动引入js文件
};
```
## 打包
在package.json中定义了脚本，npm run build 就可以重新生成dist
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "rm -rf dist && webpack"
  }
  ```
//直接看config.js
## 引入css
1. npm i save-dev css-loader
2. npm i save-dev style-loader
//yarn add css-loader --dev
##  npm install --save-dev webpack-dev-server
1. 
```
devtool: 'inline-source-map',
   devServer: {
    contentBase: './dist',
  },
```
2. package.json
```
 "start": "webpack-dev-server --open",
 ```
https://webpack.js.org/guides/development/#root
## MiniCssExtractPlugin
https://webpack.js.org/plugins/mini-css-extract-plugin/#root

1. npm install --save-dev mini-css-extract-plugin
2. webpack.config.js

```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: '../',
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
          ],
      },
    ],
  },
};
```
3. Minimal example
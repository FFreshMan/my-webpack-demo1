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
##  npm install --save-dev webpack-dev-server 本地预览
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
## MiniCssExtractPlugin 生成css文件
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
4. 缓存
```
new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false, 
    }),
```
## 切换模式
复制一份webpack.config.js
相同部分合并到base中，在其他js中引入，然后覆盖需要的属性
## loader和plugin的区别
loader:1 to 1 用于加载文件，功能单一
>babel loader ; css loader; style loader 
plugin:n to 1 or 1 to n 扩展webpack功能
>miniCssExtractPlugin
>htmlWebpackPlugin
## npm install sass-loader dart-sass webpack --save-dev (scss)
见base.js  module.rules部分
## less-loader
```
npm install --save-dev less-loader less
```
## stylus
```
npm install stylus-loader stylus --save-dev
```
## img
```
npm install image-webpack-loader --save-dev
npm i file-loader --save-dev
```
## 懒加载

## ... 扩展运算符
自定义的属性在拓展运算符后面，则拓展运算符对象内部同名的属性将被覆盖掉。同理，自定义的属性在拓展运算度前面，则变成设置新对象默认属性值。
```
let person = {name: "Amy", age: 15};
let someone = { ...person, name: "Mike", age: 17};
let someone1 = {  name: "Mike", age: 17,...person};
console.log(someone);  //{name: "Mike", age: 17}
console.log(someone1);  //{name: "Amy", age: 15}
```
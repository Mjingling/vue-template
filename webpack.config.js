var webpack=require('webpack');

//css文件提取器需要的配置项
var ExtractTextPlugin=require('extract-text-webpack-plugin');

//html生成器需要的配置项
var HtmlwebpackPlugin = require('html-webpack-plugin');

//postcss-loader 需要的配置项
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app:'./src/app.js',
    // 第三方包
    vendor: [
      'vue',
      'vue-router'
    ]
  },
  output: {
    path: './build',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/, loader: 'vue-loader'
      },
      // 转化ES6的语法 不编译 node_modules 目录
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      // 编译css并自动添加css前缀
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style','css!postcss-loader?sourceMap=inline')},
      {
        test: /\.less$/, loader: ExtractTextPlugin.extract('style','css!postcss-loader?sourceMap=inline!less')
      },
      {
          // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
          // 如下配置，将小于8192byte的图片转成base64码
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader?limit=8192&name=./images/[name].[ext]?[hash]',
        }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  plugins:[
    new ExtractTextPlugin('css/app.css'),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'js/commons', // 这公共代码的trunk名为'commons'
    //   filename: '[name].js', // 生成后的文件名，虽说用了[name]，但实际上就是'commons.js'了
    //   minChunks: 4, // 设定要有4个trunk（即4个页面）加载的js模块才会被纳入公共代码。这数目自己考虑吧，我认为3-5比较合适。
    // }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"js/vendor.bundle.js"),

    //压缩js和Css
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      except: ['$super', '$', 'exports', 'require']    //排除关键字
    }),

    //生成html
    new HtmlwebpackPlugin({
      title: 'Hello babel-loader',
      filename: 'index.html',
      template: './src/index.html',//html文件的模板
      inject: true,//允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      minify:{    //压缩HTML文件
         removeComments:true,    //移除HTML中的注释
         collapseWhitespace:true    //删除空白符与换行符
      }
    }),

    // 需要手动添加 HotModuleReplacementPlugin , 命令行的方式会自动添加
    new webpack.HotModuleReplacementPlugin()

  ]

  ,devServer:{
        contentBase:'./dist',
        inline: true,//自动刷新
        hot: true//热加载  当使用配置方式的时候 需要 在plugins里面加入 webpack.HotModuleReplacementPlugin
    }
}

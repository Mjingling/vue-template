# 【vue-template】项目描述
这是我的vue练手项目，所用技术为vue、vue-router   
打包工具为： webpack    

# 目录说明   
```
  build --->打包之后文件目录
  src   --->开发目录【开发目录经过 webpack 打包之后会自动被打包到 build 目录】
  ---components 组件目录
  ---css        样式目录
  ---images     图片目录
  ---app.js     应用主文件
  ---index.html 应用主页面
  ---routers.js 系统路由文件
```

# 如何运行    

> 如果你只是想看看项目是什么内容，请直接打开 build/index.html文件


> 1、安装 nodejs   

下载地址[点此链接下载](http://nodejs.cn/)，详细安装教程请自行百度   

> 2、安装 git    


```
 //请切换到node目录 在node环境下运行下面命令
 npm install git -g
```    

> 3、下载本项目，命令如下   

```
 git clone https://github.com/Mjingling/vue-template.git
```  

> 4、安装必须的包     


```
 //请切换到node目录 在node环境下运行下面命令
 cd vue-template //进入文件夹 vue-template
 npm install     //安装项目打包的依赖 node 包
```   

> 5、开启开发服务   

```
 webpack-dev-server

 /**运行结果**/
 http://localhost:8080/
webpack result is served from /
content is served from ./dist
Hash: cb36867c21201607b3ec
Version: webpack 1.13.2
Time: 18507ms

....//省略很多行代码
webpack: bundle is now VALID.
//看到上边这行代码之后，再浏览器打开 http://localhost:8080/ 即可
```   

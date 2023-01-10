

bibi 地址：https://www.bilibili.com/video/BV1zq4y1p7ga/

# webpack

## Vue 基础-00 课程介绍

### 使用人群

- 对 Vue 框架**感兴趣**
- 前端在职，**有进一步提升需求**
- 希望**快速入门 Vue 开发**的相关人员

### 前置储备

- 必要前提：

  - HTML + CSS + JavaScript
  - WebAPI (DOM + BOM)
  - Ajax

- 可选前提：
  - Node.js

### 第一天：前端工程化和 Webpack

- 前端工程化的相关概念
- Webpack 的常见用法
- 打包发布
- Source Map

**目标：**

- 了解工程化的前端开发方式
- 能够知道 Webpack 在实际开发中所起到的作用

### 第二天：Vue 基础入门-part1

- Vue 的基础使用步骤
- Vue 中常用的指令
- vue-devtools 调试工具

**目标：**

- 能够使用 Vue 的指令完成页面结构的渲染
- 能够使用 Vue 的调试工具辅助 Vue 的开发

### 第三天：Vue 基础入门-part2

- 过滤器和侦听器
- 计算属性的用法
- axios 的基本语法
- vue-cli 的安装和使用

**目标：**

- 能够在实际开发中合理运用过滤器，侦听器，计算属性解决自己遇到的问题
- 能够使用 axios 发起 Ajax 请求
- 能够使用 vue-cli 工具生成工程化的 Vue 项目

### 第四天：组件与生命周期

- 组件的注册与使用
- 组件的 props 自定是属性
- 解决组件样式冲突
- 组件的生命周期
- 组件之间的通讯（数据共享）

**目标：**

- 能够掌握 .vue 单文件组件的基本用法
- 能够掌握组件通讯的三种方式
- 掌握组件生命周期的只想顺序和应用场景

### 第五天：ref & 购物车案例

- 使用 ref 引用 DOM 元素和组件实例
- $nextTick 的基本使用
- 购物车案例

**目标：**

- 能够使用 ref 获取页面上 DOM 或组件的引用
- 能够知道 $nextTick 的应用场景并合理地使用
- 通过 “购物车案例”巩固前 4 天所有学的知识

### 第六天：Vue 组件的高级用法

- 动态组件的使用
- 插槽的使用（默认插槽，具名插槽，作用域插槽）
- 自定义指令
- ESlint 的使用

**目标：**

- 能够使用 keep-alive 实现组件的缓存
- 能够使用插槽提升组件的复用性
- 能够了解常见的 ESlint 语法规则

### 第七天：路由（vue-router）

- 路由的基本配置与使用
- 路由重定向
- 嵌套路由，动态路由
- 编程式导航，路由导航守卫

**目标：**

- 能够在项目中安装和配置路由
- 能够使用路由实现单页面应用程序的开发
- 能够使用导航守卫控制路由的访问权限

### 第八天：黑马头条（收尾案例）

- Vant 组件库
- 封装 axios
- 上拉加载 & 下拉刷新
- Vant 主题定制

**目标：**

- 掌握 Vant 组件库的基本使用
- 能够知道如何封装 axios 请求模块
- 能够知道如何实现上拉加载和下拉刷新功能

## 01 学习目标

### webpack 的学习目标

- 理解什么是前端工程化

  - 转变对前端开发的认知

- 了解 webpack 的基本用法

  - 为后面 Vue 和 React 课程的学习做技术储备

- 不强求要求大家能手动配置 webpack
  - 一定要知道 webpack 在项目中有什么作用
  - 清楚 webpack 中的核心概念

## 02 工程化的概念

### 1. 小白眼中的前端开发 vs 实际的前端开发

**小白眼中的前端开发：**

- 会写 HTML + CSS + JavaScript 就会前端开发
- 需要美化页面的样式，就拽一个 bootstrap 过来
- 需要操作 DOM 或发起 Ajax 请求，再拽一个 JQuery 过来
- 需要快速实现网页布局效果，就拽一个 Layui 过来

**实际的前端开发：**

- **工程化**（js 的模块化，css 的模块化，资源的模块化）
- **组件化**（复现现有的 UI 结构，样式，行为）
- **规范化**（目录结构的划分，编程规范化，接口规范化，文档规范化，Git 分支管理）
- **自动化**（自动化构建，自动部署，自动化测试）

### 2. 什么是前端工程化

前端工程化指的是：在**企业级的前端项目开发**中，把前端开发所需的**工具**，**技术**，**流程**，**经验**等进行规范化，标准化

企业中的 Vue 项目和 React 项目，都是基于**工程化的方式**进行开发的

好处：前端开发**自成体系**，有一套**标准的开发方案和流程**

### 3. 前端工程化的解决方案

**早期的前端工程化解决方案：**

- grunt（https://www.gruntjs.net/）
- gulp （https://www.gulpjs.com.cn/）

**目前主流的前端工程化解决方案：**

- webpack（https://webpack.docschina.org/）
- parcel（https://parceljs.org/）

## 03 了解 webpack 的概念

### 1. 什么是 webpack

概念：webpack 是**前端工程化的具体解决方案**

主要功能：它提供了友好的**前端模块化开发**支持，以及**代码压缩混淆**，**处理浏览器端 JavaScript 的兼容性**，**性能优化**等强大的功能

好处：让程序员把**工作的重心**放到具体功能的实现上，提高了前端**开发效率**和项目的**可维护性**。

## 04 webpack 基础-初始化隔行变色的案例

### 2. 创建列表隔行变色项目

- 新建项目空白目录，并运行 npm init -y 命令，初始化包管理配置文件 package.json
- 新建 src 源代码目录
- 新建 src -> index.html 首页和 src -> index.js 脚本文件
- 初始化首页基本得结构
- 运行 npm install jquery -S 命令，安装 JQuery
- 通过 ES6 模块化得方式导入 JQuery ，实现列表隔行变色效果

## 05 webpack 基础-安装和配置 webpack

### 3. 在项目中安装 webpack

在终端运行如下的命令，安装 webpack 相关的两个包：

npm install webpack@5.42.1 webpack-cli@4.7.2 -D

-S 是 --save 的简写

-D 是 --save-dev 的简写

### 4. 在项目中配置 webpack

（1）在项目根目录中，创建名为 **webpack.config.js** 的 webpack 配置文件，并初始化如下的基本配置：

```
// 使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
module.exports = {
  mode: 'development',  // mode 用来指定构建模式，可选值有 development 和 production
}
```

（2）在 package.json 的 scripts 节点下，新增 **dev 脚本**如下：

```
  "scripts": {
    "dev": "webpack" // scripts 节点下的脚本，可以通过 npm run 执行，例如 npm run dev
  },
```

（3）在终端中运行 npm run dev 命令，启动 webpack 进行项目的打包构建

## 06 webpack 基础-了解 mode 可选值的应用场景

#### 4.1 mode 的可选值

mode节点的可选值有两个，分别是：

- **development**
  - **开发环境**
  - **不会**对打包生成的文件进行**代码压缩**和**性能优化**
  - 打包**速度快**，适合在**开发阶段**使用

- **production**
  - **生产环境**
  - **会**对打包生成的文件进行**代码压缩**和**性能优化**
  - 打包**速度慢**，仅适合在项目**发布阶段**使用

## 07 指定 webpack 的 entry 和 output

#### 4.2 webpack.config.js 文件的作用

webpack.config.js 是 webpack 的配置文件。webpack 在真正开始打包构建之前，会**先读取这个配置文件**，从而基于给定的配置，对项目进行打包

注意：由于 webpack 是**基于 node.js 开发出来**的打包工具，因此在它的配置文件中，支持使用 node.js 相关的语法和模块进行 webpack 的个性化配置。

#### 4.3 webpack 中的默认约定

在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：

- 默认的打包入口文件为 **src** -> **index.js**
- 默认的输出文件路径为 **dist** -> **main.js**

注意：可以在 **webpack.config.js** 中修改打包的默认约定

#### 4.4 自定义打包的入口与出口

在 webpack.config.js 配置文件中，通过 **entry 节点**指定**打包的入口**。通过 **output 节点**指定**打包的出口**。

示例代码如下：

```
const path = require('path')  //导入 node.js 中专门操作路径的模块

// 使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
module.exports = {
  entry: path.join(__dirname, './src/index.js'),  //打包入口文件的路径
  output: {
    path: path.join(__dirname, './dist'),  // 输出文件的存放路径
    filename: 'bundle.js',  // 输出文件名称
  }
}
```

## 08 插件 安装和配置webpack-dev-server 这个插件

### 1. webpack 插件的作用

通过安装和配置第三方的插件：可以**拓展 webpack 的能力**，从而让 webpack **用起来更方便**。最常用的 webpack 插件有如下两个：

- **webpack-dev-server**
  - 类似于 node.js 阶段用到的 nodemon 工具
  - 每当修改了源代码， webpack 会自动进行项目的打包和构建


- **html-webpack-plugin**
  - webpack 中的 HTML 插件（类似于一个模版引擎插件）
  - 可以通过此插件自定制 index.html 页面的内容

#### 2.1 安装 webpack-dev-server

运行如下的命令，即可在项目中安装此插件：

npm install webpack-dev-server@3.11.2 -D

#### 2.2 配置 webpack-dev-server

- 修改 **package.json** -> **scripts** 中的 **dev** 命令如下：

```
"scripts": {
    "dev": "webpack serve",  // script节点下的脚本，可以通过 npm run 执行
  },
```

- 再次运行 **npm run dev** 命令，重新进行项目的打包
- 在浏览器中访问 **http://localhost:8080** 地址，查看自动打包效果

注意：webpack-dev-server 会启动一个**实时打包的 http 服务器**

## 09 插件 介绍 webpack-dev-server 的工作原理

## 10 插件 安装和配置 html-webpack-plugin 这个插件

#### 3.1 安装 html-webpack-plugin

运行如下的命令，即可在项目中安装此插件

npm install html-webpack-plugin@5.3.2 -D

#### 3.2 配置 html-webpack-plugin

```
// 1. 导入 HTML 插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

// 2. 创建 HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html',  // 指定原文件的存放路径
  filename: './index.html',  // 指定生成的文件的存放路径
})

module.exports = {
  mode: 'development',
  plugins: [htmlPlugin],  // 3. 通过 plugins 节点，使 htmlPlugin 插件生效
}
```

## 11 插件 了解 html-webpack-plugin 插件的特性

#### 3.3 解惑 html-webpack-plugin

- 通过 HTML 插件复制到项目根目录的 index.html 页面，**也被放到了内存中**
- HTML 插件在生成的 index.html **页面**，**自动注入**了打包的 bundle.js 文件

## 12 插件 了解 devServer 中常用的选项

### 4. devServer 节点

在 webpack.config.js 配置文件中，可以通过 **devServer** 节点对 webpack-dev-server 插件进行更多的配置，示例代码如下：

```
devServer: {
    open: true,  // 初次打包完成后，自动打开浏览器
    host: '127.0.0.1',  // 实时打包所使用的主机地址
    // 在 http 协议中，如果端口号是80，则可以被省略
    port: 3000,  // 实时打包所使用的端口号
  }
```

注意：凡事修改了 webpack.config.js 配置文件，或修改了 package.json 配置文件，**必须重启实时打包的服务器**，否则最新的配置文件无法生效！

## 13 loader 说明 loader的作用

### 1. loader 概述

在实际开发过程中， webpack 默认只能打包处理以 .js 后缀名结尾的模块。其他**非 .js 后缀名结尾的模块**，webpack 默认处理不了，**需要调用loader 加载器才可以正常打包**，否则会报错！

loader 加载器的作用： **协助 webpack 打包处理特定的文件模块**。比如：

- css-loader 可以打包处理 .css 相关的文件
- less-loader 可以打包处理 .less 相关的文件
- babel-loader 可以打包处理 webpack 无法处理的高级 JS 语法

### 2. loader 的调用过程

![loader调用过程](./image/loader调用过程.png)

### 3. 打包处理 css 文件

- 运行 **npm i style-loader@3.0.0 css-loader@5.2.6 -D** 命令，安装处理 css 文件的 loader
- 在 webpack.config.js 的 **module** -> **rules** 数组中，添加 loader 规则如下：

```
module: {  //所有第三方文件模块的匹配规则
  rules: [  //文件后缀名的匹配规则
    {test: /\.css$/, use: ['style-loader', 'css-loader']}
  ]
}
```

其实， **test** 表示匹配的**文件类型**，**use** 表示对应**要调用的 loader**

注意：

- use 数组中指定的 loader **顺序是固定的**
- 多个 loader 的调用顺序是：**从后往前调用**

## 14 了解 loader 调用的过程

```
import './css/index.css'
```

- webpack 默认只能打包处理 .js 结尾的文件，处理不了其他后缀的文件
- 由于代码中包含了 **index.css** 这个文件，因此 webpack 默认处理不了
- 当 webpack 发现某个文件处理不了的时候，会查找 **webpack.config.js** 这个配置文件，看 module.**rules** 数组中，是否配置了对应的 loader 加载器。

```
module: {
  rules: [
    {test: /\.css$/, use: ['style-loader', 'css-loader']}
  ]
}
```

- webpack 把 index.css 这个文件，**先**转交给最后一个 loader 进行处理（先转交给 css-loader）
- 当 css-loader 处理完毕之后，会把处理的结果，转交给下一个 loader （转交给 style-loader）
- 当 style-loader 处理完毕之后，发现没有下一个loader了，于是就把处理的结果，转交给了 webpack 
- webpack 把 style-loader 处理的结果，合并到 /dist/bundle.js 中，最终生成打包好的文件

## 15 loader 打包处理less文件

### 4. 打包处理 less 文件

- 运行 **npm i less-loader@10.0.1 less@4.1.1 -D** 命令
- 在 webpack.config.js 的 **module** -> **rules** 数组中，添加 loader 规则如下：

```
module: {  //所有第三方文件模块的匹配规则
    rules: [  //文件后缀名的匹配规则
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
    ]
  }
```

## 16 回顾 base64 的图片优缺点

### 5. 打包处理样式表中与 url 路径相关的文件

- 运行 **npm i url-loader@4.1.1 file-loader@6.2.0 -D** 命令
- 在 webpack.config.js 的 **module** -> **rules** 数组中，添加 loader 规则如下：

```
module: {  //所有第三方文件模块的匹配规则
    rules: [  //文件后缀名的匹配规则
      { test: /\.jpg|png|gif$/, use: 'url-loader?limit=2229' }
    ]
  }
```

其中 ？之后的是 **loader 的参数项**：

- limit 用来指定**图片的大小**，单位是字节（byte）
- 只有 <= limit 大小的图片，才会被转为 base64 格式的图片

## 17 演示图片 loader 加载的问题

## 18 配置加载图片的 loader

## 19 loader 介绍 webpack 处理样式的过程

## 20 url-loader 的 limit 选项

## 21 使用 babel-loader 转换处理高级的 JS 语法

### 6. 打包处理 js 文件中的高级语法

webpack 只能打包处理**一部分**高级的 javascript 语法。对于那些 webpack 无法处理的高级 js 语法，需要借助于 **babel-loader** 进行打包处理。例如 webpack 无法处理下面的 javascript 代码：

```
// 1. 定义了名为 info 的装饰器
function info(target) {
	// 2. 为目标添加静态属性 info
	target.info = 'Person info'
}

// 3. 为 Person 类应用 info 装饰器
@info
class Person {}

//4. 打印 Person 的静态属性 info
console.log(Person.info)
```

#### 6.1 安装 babel-loader 相关的包

运行如下的命令安装对应的依赖包：

**npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D**

在 webpack.config.js 的 **module** -> **rules** 数组中，添加 loader 规则如下：

```
// 注意：必须使用 exclude 指定排除项，因为 node_modules 目录下的第三方包不需要被打包
{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
```

#### 6.2 配置  babel-loader

在项目根目录下，创建名为 **babel.config.js** 的配置文件，定义 **Babel 的配置项**如下：

```
module.exports = {
  // 声明 babel 可用的插件
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ]
  ],
}
```

详情请参考 Babel 的官网（https://babeljs.io/docs/en/babel-plugin-proposal-decorators）

## 22 发布-配置 build 命令

### 1. 为什么要打包发布

**项目开发完成之后**，需要使用 webpack **对项目进行打包发布**，注意原因有一下两点：

- 开发环境下，打包生成的文件**存放于内存中**，无法获取到最终打包生成的文件
- 开发环境下，打包生成的文件**不会进行代码压缩和性能优化**

**为了让项目能够在生产环境下高性能的运行**，因此需要对项目进行打包发布。

### 2. 配置 webpack 的打包发布

在 **package.json** 文件的 **scripts** 节点下，新增 build 命令如下：

```
"scripts": {
    "build": "webpack --mode production"  //项目发布时，运行 build 命令
  },
```

**--mode** 是一个参数项，用来指定 webpack 的**运行模式**，production 代表生产环境，会对打包生成的文件进行**代码压缩**和**性能优化**

注意：--mode 指定的参数项，会**覆盖** webpack.config.js 中的 mode选项。

## 23 发布-优化图片和js文件的存放路径

### 3. 把 javascript 文件统一生成到 js 目录中

在 **webpack.config.js** 配置文件的 **output** 节点中，进行如下的配置：

```
output: {  // 指定生成的文件要存放到哪里
    path: path.join(__dirname, 'dist'),  // 输出文件的存放路径
    filename: 'js/bundle.js',  // 输出文件名称
  },
```

### 4. 把图片文件统一生成到 image 目录中

修改  **webpack.config.js** 中的 **url-loader** 配置项，新增 **outputPath** 选项即可指定图片文件的输出路径：

```
{
        test: /\.jpg|png|gif$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 22228,
            // 明确指定把打包生成的图片文件，存储到 dist 目录下的 image 文件夹中
            outputPath: 'image'
          }
        }
```

## 24 发布-配置和使用 clean-webpack-plugin 插件自动删除 dist 目录

### 5. 自动清理 dist 目录下的旧文件

为了在每次打包发布时**自动清理掉 dist 目录中的旧文件**，可以安装并配置 **clean-webpack-plugin** 插件：

```
// 1. 安装清理 dist 目录的 webpack 插件
npm install clean-webpack-plugin@3.0.0 -D

// 2. 按需导入插件，得到插件的构造函数之后，创建插件的实例对象
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()

// 3.把创建的 cleanPlugin插件实例对象，挂载到 plugins 节点中
plugins: [htmlPlugin, cleanPlugin],  //挂载插件
```

## 25 发布-总结发布的主要流程

## 26 SourceMap-开发模式下如何配置 SourceMap

### 2. 什么是 Source Map

**Source Map就是一个文件信息，里面存储着位置信息**。也就是说，Source Map 文件中存储着压缩混淆后的代码，所对应的**转换前的位置**

有了它，出错的时候，除错工具将**直接显示原始代码，而不是转换后的代码**，能够极大的方便后期的调试

### 3. webpack 开发环境下的 Source Map

在开发环境下，webpack **默认开启**了 Source Map 功能。当程序运行出错时，可以直接在控制台提示**错误行的位置**，并**定位到具体的源代码**：

#### 3.1 默认 Source Map 的问题

开发环境下默认生成的 Source Map，记录的是**生成后的代码的位置**。会导致**运行时报错的行数与源代码的行数**不一致的问题。示意图如下：

![3.1](.\image\3.1.png)

#### 3.2 解决默认 Source Map 的问题

开发环境下，推荐在 **webpack.config.js** 中添加如下的配置，即可保证**运行时报错的行数**与**源代码的行数**保持一致

```
module.exports = {
  mode: 'development',
  // eval-source-map 仅限在“开发模式“下使用，不建议在”生成模式“下使用
  // 此选项生成的 source map 能够保证”运行时报错的行数“与”源代码的行数“保持一致
  devtool: 'eval-source-map',
 }
```

## 27 SourceMap-在发布项目的时候出于安全性考虑建议关闭 SourceMap

### 4. webpack 生产环境下的 Source Map

在**生产环境**下，如果省略了 **devtool 选项**，则最终生成的文件中**不包含 Source Map**。这能够**防止原始代码**通过 Source Map 的形式**暴露**给别有所图之人

![4](.\image\4.png)

## 28 SourceMap-SourceMap 的最佳实践

#### 4.1 只定位行数不暴露源码

在生产环境下，如果**只想定位报错的具体行数**，且**不想暴露源码**。此时可以将 **devtool** 的值设置为 **nosources-source-map**。实际效果如下图所示：

![4.1](.\image\4.1.png)

#### 4.2 定位行数且暴露源码

在生产环境下，如果**想在定位报错行数的同时，展示具体报错的源码**。此时可以将 **devtool** 的值设置为 **source-map**。实际效果如下图所示：

![4.2](.\image\4.2.png)

采用此选项后：你应该将你的服务器设置为，**不允许普通用户访问 source-map 文件！**

### 5. Source Map 的最佳实践

- 开发环境下：
  - 建议把 devtool 的值设置为 **eval-source-map**
  - 好处：可以精准定位到具体的错误行

- 生产环境下：
  - 建议**关闭 Source Map** 或将 devtool 的值设置为 **nosources-source-map**
  - 好处：防止源码泄露，提高网站的安全性

## 29 拓展-讲解 webpack 中@的原理和好处

**思考：实际开发中需要自己配置webpack吗？**

答案：**不需要**

- 实际开发中会使命令行工具（俗称 **CLI**）**一键生成**带有 webpack 的项目
- 开箱即用，所有 webpack 配置项都是现成的！
- 我们只需要知道 webpack 中的基本概念即可！

## 30 拓展-在 Chrome 浏览器中安装 vue-devtools 调试工具

# Vue 2.0

## 01 简介-了解 vue 是什么

### 1. 什么是 vue

官方给出的概念：Vue（读音 /vju:/，雷士与 view）是一套用于**构建用户界面**的前端**框架**

![vue01](.\image\vue01.png)

##### 解释

- **构建用户界面**
  - 用 vue 往 html 页面中填充数据，非常的方便

- **框架**
  - 框架是一套现成的解决方案，程序员只能遵守框架的规范，去编写自己的业务功能！
  - 要学习 vue，就是在学习 vue 框架中规定的用法！
  - vue 的指令，组件（是对 UI 结构的复用），路由， Vuex

### 2. vue 的特性

vue 框架的特性，主要体现在如下两个方面：

- **数据驱动视图**
- **双向数据绑定**

## 02 简介-vue 的两个特性

#### 2.1 数据驱动视图

在使用了 vue 的页面中，vue 会**监听数据的变化**，从而**自动**重新渲染页面的结构，示意图如下：

![vue02](.\image\vue02.png)

- 好处：当页面数据发生变化时，页面会自动重新渲染！
- 注意：数据驱动视图是**单向的数据绑定**。

#### 2.2 双向数据绑定

在**填写表单**时，双向数据绑定可以辅助开发者在**不操作 DOM 的前提下，自动**把用户填写的内容**同步到**数据源中。示意图如下：

![vue2-2.2](.\image\vue2-2.2.png)

- 好处：开发者不再需要手动操作 DOM 元素，来获取表单元素最新的值！

##### 解释

- **数据驱动视图**

  - 数据的变化**会驱动视图**自动更新
  - 好处：程序员只管把数据维护好，那么页面结构会被 vue 自动渲染出来！

- **双向数据绑定**

  > 在网页中，from 表单负责**采集数据**，Ajax 负责**提交数据**

  - js 数据的变化，会被自动渲染到页面上
  - 页面上表单采用的数据发生变化的时候，会被 vue 自动获取到，并更新到 js 数据中

## 03 简介-MVVM

#### 2.3 MVVM

**MVVM** 是 vue 实现**数据驱动视图**和**双向数据绑定**的核心原理。MVVM 指的是 **Model，View 和 ViewModel**，它把每个 HTML 页面都拆分成了这三个部分，如图所示：

![vue2-2.3](.\image\vue2-2.3.png)

在 MVVM 概念中：

- **Model** 标时当前页面渲染时所依赖的数据源。
- **View** 表示当前页面所渲染的 DOM 结构
- **ViewModel** 表示 Vue 的实例，它是 MVVM 的核心

#### 2.4 MVVM 的工作原理

**ViewModel 作为 MVVM 的核心**，是它把当前页面的**数据源**（Model）和**页面结构**（View）连接在了一起

![vue2-2.4](.\image\vue2-2.4.png)

当**数据源发生变化**时，会被 ViewModel 监听到， VM 会根据最新的数据源**自动更新**页面的结构

当**表单元素的值发生变化**时，也会被 VM 监听到， VM 会把变化过后的最新的值**自动同步**到 Model 数据源中

##### 解释

> 数据驱动视图和双向数据绑定的底层原理是 MVVM （Model 数据源，View 视图，ViewModel 就是 Vue 的实例）

### 3. vue 的版本

当前，vue 共有3个大版本，其中：

**2.x 版本的 vue 是目前企业级项目开发中的主流版本**

3.x 版本的 vue 于2020-09-19发布，生态还不完善，尚未在企业级项目开发中普及和推广

1.x 版本的 vue 几乎被淘汰，不在建议学习和使用

总结：

**3.x 版本的 vue 是未来企业级项目开发的趋势；**

2.x 版本的 vue 在未来（1~2年内）会被逐渐淘汰；

## 04 vue 基础用法-初步使用 vue

### 1. 基本使用步骤

- 导入 vue.js 的script 脚本文件
- 在页面中声明一个将要被 vue 所控制的 DOM 区域
- 创建 vm 实例对象（vue 实例对象）

```
<!-- 2. 在页面中声明一个将要被 vue 所控制的 DOM 区域 -->
  <div id="app">
    {{username}}
  </div>
  <!-- 1. 导入 vue.js 的 script 脚本文件 -->
  <script src="js/vue.js"></script>
  <script>
    // 3. 创建 vm 实例对象（vue 实例对象）
    const vm = new Vue({
      el: "#app",  // 3.1 创建 vm 实例要控制页面的哪个区域
      data () {  // 3.2 指定 Model 数据源
        return {
          username: 'zs'
        }
      },
    }); 
  </script>
```

### 2. 基本代码于 MVVM 的对应关系

![vue2-5.2](.\image\vue2-4.2.png)

## 05 vue 基础用法-体验 vue 调试工具和数据驱动视图

### 1. 安装 vue-devtools 调试工具

vue 官方提供的 vue-devtools 调试工具，能够方便开发者对 vue 项目进行调试与开发

- **Chrome 浏览器**在线安装 vue-devtools :
  - https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
- **FireFox 浏览器**在线安装 vue-devtools :
  - https://addons.mozilla,org/zh-CN/firefox/addon/vue-js-devtools/

### 2. 配置 Chrome 浏览器中的 vue-devtools

![vue2-5.2](.\image\vue2-5.2.png)

### 3. 使用 vue-devtools 调试 vue 页面

## 06 vue 基础用法-内容渲染指令

### 1. 指令的概念

**指令 （Directives）**是 vue 为开发者提供的**模板语法**，用于**辅助开发者染页面的基本结构**。

vue 中的指令**按照不同的用途**可以分为如下 6 大类：

- **内容渲染**指令
- **属性绑定**指令
- **事件绑定**指令
- **双向绑定**指令
- **条件渲染**指令
- **列表渲染**指令

注意：指令是 vue 开发中最基础，最常用，最简单的知识点。

#### 1.1内容染指令

**内容渲染指令**用来**辅助开发者渲染 DOM 元素的文本内容**。常用的内容渲染指令有如下3个：

- v-text
- {{}}
- v-html

##### v-text 指令

用法实例：

```
<div id="app">
    <!-- 把 username 对应的值，渲染到第一个 p 标签中 -->
    <p v-text="username"></p>
    <!-- 把 gender 对应的值，渲染到第二个 p 标签中 -->
    <!-- 注意：第二个 p 标签中，默认的文本”性别“会被 gender 的值覆盖掉 -->
    <p v-text="gender">性别</p>
  </div>
  <script src="js/vue.js"></script>
  <script>
    const vm = new Vue({
      el: "#app",
      data () {
        return {
          username: '张三',
          gender: 'male'
        }
      },
    }); 
  </script>
```

注意：v-text 指令会**覆盖元素内默认的值**。

##### {{}} 语法

vue 提供的**{{}}**语法，专门用来解决 v-text 会覆盖默认文本内容的问题。这种{{}}语法的专业名称是**插值表达**
**式**（英文名为: **Mustache**）。

```
<!-- 使用 {{}} 插值表达式,将对应的值渲染到元素的内容节点中 -->
<!-- 同时保留元素自身的默认值 -->
<p>姓名：{{username}}</p>
<p>性别：{{gender}}</p>
```

注意：相对于 v-text 指令来说，**插值表达式在开发中更常用一些**！因此它不会覆盖元素中默认的文本内容

##### v-html

**v-text** 指令和**插值表达式**只能渲染**纯文本内容**。如果要**包含 HTML 标签的字符串**渲染为页面的 HTML 元素，则需要用到 v-html 这个指令：

```
<!-- 假设 data 中定义了名为 info 的数据，数据的值为包含 HTML 标签的字符串 -->
<p V-html="info"></p>
```

注意：可以把带有标签的字符串，渲染成真正的 HTML 内容

## 07 vue 基础用法-el属性的使用注意点

## 08 vue 基础用法-属性绑定指令

#### 1.2 属性绑定指令

如果需要为**元素的属性**动态绑定**属性值**，则需要用到 **v-bind** 属性绑定指令。用法示例如下：

```
<div id="app">
    <input type="text" v-bind:placeholder="tips">
    <hr>
    <img :src="photo" alt="">
  </div>
  <script src="js/vue.js"></script>
  <script>
    const vm = new Vue({
      el: "#app",
      data () {
        return {
          tips: '请输入用户名',
          photo: 'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/header/logo_e835568.png'
        }
      },
    }); 
  </script>
```

## 09 vue 基础用法-在插值和属性绑定中编写 js 语句

**使用 JavaScript 表达式**

在 vue 提供的模板渲染中，除了支持**绑定简单的数据值**之外，还支持 **JavaScript 表达式的运算**，例如：

```
<div id="app">
    <p>{{number+1}}</p>
    <p>{{ok ? 'YES' : 'NO'}}</p>
    <p>{{message.split('').reverse().join('')}}</p>
  </div>
  <script src="js/vue.js"></script>
  <script>
    const vm = new Vue({
      el: "#app",
      data () {
        return {
          number: 1,
          ok: true,
          message: 'Hello World'
        }
      },
    }); 
  </script>
```

## 10 vue 事件绑定-了解 v-on 指令的基本用法

#### 1.3 事件绑定指令

vue 提供了 **v-on** 事件绑定指令，用来辅助程序员为 DOM 元素绑定事件监听。语法格式如下：

```
<div id="app">
    <p>{{count}}</p>
    <!-- 语法格式为 v-on:事件名称=”事件处理函数名称“ -->
    <button v-on:click="addCount">+1</button>
  </div>
  <script src="js/vue.js"></script>
  <script>
    const vm = new Vue({
      el: "#app",
      data () {
        return {
          count: 0
        }
      },
      methods: {
        addCount () {
          this.count++
        }
      },
    }); 
  </script>
```

 **v-on**：简介是 @

注意：原生 DOM 对象有 `onclick，oninput，onkeyup` 等原生事件，替换为 vue 的事件绑定形式后，分别为：`v-on:click，v-on:input，v-on:keyup`

## 11 vue 事件绑定-处理函数的简写形式

## 12 vue 事件绑定-通过 this 访问数据源中的数据

## 13 vue 事件绑定-绑定事件并传参

```
<div id="app">
    <p>{{count}}</p>
    <button v-on:click="addCount(2)">+1</button>
    <button v-on:click="sub">-1</button>
  </div>
  <script src="js/vue.js"></script>
  <script>
    const vm = new Vue({
      el: "#app",
      data () {
        return {
          count: 0
        }
      },
      methods: {
        addCount (n) {
          this.count += n
        },
        sub () {
          this.count -= 1
        }
      },
    }); 
  </script>
```

## 14 vue 事件绑定-v-on 指令的简写形式

```
<!-- v-on: 指令可以被简写为 @ -->
<button @click="addCount(2)">+1</button>
<button @click="sub">-1</button>
```

## 15 vue 事件绑定-$event

$event 的应用场景：如果默认的事件对象 e 被覆盖了，则可以手动传递一个 $event

语法格式如下：

```
<div id="app">
    <p>count 的值是：{{count}}</p>
    <!-- 如果 count 是偶数，则按钮背景变成红色，否则，取消背景颜色 -->
    <!-- vue 提供了内置变量，名字叫做 $event ，它就是原生 DOM 的事件对象 -->
    <button @click="addCount(1, $event)">+N</button>
  </div>

  <script src="js/vue.js"></script>
  <script>
    const vm = new Vue({
      el: "#app",
      data () {
        return {
          count: 0
        }
      },
      methods: {
        addCount (n, e) {
          this.count += n
          if (this.count % 2 == 0) {  //偶数
            e.target.style.background = 'red'
          } else {  //奇数
            e.target.style.background = ''
          }
        }
      },
    }); 
  </script>
```

## 16 vue 事件绑定-事件修饰符

**事件修饰符**

在事件处理函数中调用 **event.preventDefault()** 或 **event.stopPropagation()** 是非常常见的需求。因此， vue 提供了**事件修饰符**的概念，来辅助程序员更方便的**对事件的触发进行控制**。常见的5个事件修饰符如下：

| 事件修饰符   | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| **.prevent** | **阻止默认行为**（例如：阻止 a 连接的跳转，阻止表单的提交等） |
| **.stop**    | **阻止事件冒泡**                                             |
| .capture     | 以捕获模式触发当前的事件处理函数                             |
| .once        | 绑定的事件只触发1次                                          |
| .self        | 只有在 event.target 是当前原生自身时触发事件处理函数         |

语法格式如下：

```
<div id="app">
    <a href="http://www.baidu.com" @click.prevent="show">跳转到百度首页</a>

    <hr>
    <!-- 事件冒泡 -->
    <div style="height:150px; background-color: orange; padding-left: 200px; line-height: 150px;" @click="divHandle">
      <button @click.stop="btnHandle">按钮</button>
    </div>
  </div>

  <script src="js/vue.js"></script>
  <script>
    const vm = new Vue({
      el: "#app",
      data () {
        return {
          count: 0
        }
      },
      methods: {
        show (e) {
          // e.preventDefault()
          console.log('点击了 a 链接')
        },
        divHandle () {
          console.log('divHandle')
        },
        btnHandle () {
          console.log('btnHandle')
        }
      },
    }); 
  </script>
```

## 18 vue 事件绑定-按键修饰符

**按键修饰符**

在监听**键盘事件**时，我们经常需要**判断详细的按键**。此时，可以为**键盘相关**的事件添加**按键修饰符**，例如：

```
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit` -->
<input @keyup.enter="submit" >

<!-- 只有在 `key` 是 `Esc` 时调用 `vm.clearInput` -->
<input @keyup.esc="clearInput" >
```

## 19 vue 双向绑定-了解 v-model 指令的用法

#### 1.4 双向绑定指令

vue 提供了 **v-model 双向数据绑定**指令，用来辅助开发者在**不操作 DOM** 的前提下，**快速获取表单的数据**

```
<div id="app">
    <p>用户名是：{{username}}</p>
    <input type="text" v-model="username">
    <hr>
    <p>选中的省份是：{{province}}</p>
    <select v-model="province">
      <option value="">请选择</option>
      <option value="1">北京</option>
      <option value="2">河北</option>
      <option value="3">黑龙江</option>
    </select>
  </div>

  <script src="js/vue.js"></script>
  <script>
    const vm = new Vue({
      el: "#app",
      data () {
        return {
          username: '',
          province: ''
        }
      }
    }); 
  </script>
```

## 20 vue 双向绑定-v-model 的修饰符

**v-model 指令的修饰符**

为了方便对用户输入的内容进行处理，vue 为 v-model 指令提供了3个修饰符，分别是：

| 修饰符  | 作用                              | 示例                           |
| ------- | --------------------------------- | ------------------------------ |
| .number | 自动将用户的输入值转为数值类型    | <input v-model.number="age" /> |
| .trim   | 自动将过滤用户输入的首尾空白字符  | <input v-model.trim="msg" />   |
| .lazy   | 在 "change" 是而非 "input" 时更新 | <input v-model.lazy="msg" />   |

示例用法如下：

```
<input type="text" v-model.number="n1" />
<input type="text" v-model.number="n2" />
<span>{{n1+n2}}</span>
```

## 21 vue 条件渲染-了解 v-if 和 v-show 的区别

#### 1.5 条件渲染指令

**条件渲染指令**用来辅助开发者**按需控制 DOM 的显示与隐藏**。条件渲染指令有如下两个，分别是：

- v-if
- v-show

示例用法如下：

```
<p v-if="networkState === 200">请求成功 --- 被 v-if 控制</p>
<p v-show="networkState === 200">请求成功 --- 被 v-if 控制</p>
```

## 22 vue 条件渲染-v-if 配套的指令

v-else 

v-if 可以单独使用，或配合 v-else 指令一起使用：

```
<div v-if="Math.random() > 0.5">
      随机数大于 0.5
    </div>
    <div v-else>
      随机数小于等于 0.5
    </div>
```

注意：v-else 指令**必须配合** v-if 指令一起使用，否则它将不会被识别！

v-else-if

v-else-if 指令，顾名思义，充当 v-if 的 ”else-if 块“，可以连续使用：

```
<div v-if="type === 'A'">优秀</div>
<div v-else-if="type === 'B'">良好</div>
<div v-else-if="type === 'C'">一般</div>
<div v-else>差</div>
```

注意：v-else-if 指令**必须配合** v-if 指令一起使用，否则它将不会被识别！

## 23 vue 列表渲染-了解 v-for 的基本用法

#### 1.6 列表渲染指令

vue 提供了 **v-for** 列表渲染指令，用来辅助开发者**基于一个数组来循环渲染一个列表结构**。v-for 指令需要使用 **item in items** 形式的特殊语法，其中：

- items 是**待循环的数组**
- item 是**被循环的每一项**

```
data: {
	return {
		list: [
			{id: 1, name: 'zs'},
			{id: 2, name: 'ls'}
		]
	}
}

<ul>
	<li v-for="item in list">姓名是： {{item.name}}</li>
</ul>
```

v-for 中的索引

v-for 指令还支持一个**可选的**第二个参数，即当前项的索引。语法格式为(item,index) in items，示例代码如下：

```
data: {
	return {
		list: [
			{id: 1, name: 'zs'},
			{id: 2, name: 'ls'}
		]
	}
}

<ul>
	<li v-for="(item,index) in list">姓名是： {{item.name}}</li>
</ul>
```

注意：v-for 指令中的 **item 项**和 **index 索引**都是**形参**，可以根据需要进行**重命名**。例如（user, i）in userList

## 24 vue 列表渲染-强调 v-for 循环中 key 值的注意点

**key  的注意事项**

- key 的值只能是**字符串**或**数字**类型
- key 的值**必须具有唯一性**（即：key 的值不能重复）
- 建议把**数据项 id 属性**的值作为 key 的值（因为 id 属性的值具有唯一性）
- 使用 **index 的值**当作 key 的值**没有任何意义**（因为 index 的值不具有唯一性）
- 建议使用 v-for 指令时**一定要指定 key 的值**（既提升性能，又防止列表状态紊乱）

## 25 案例-演示案例需求

## 26 案例-循环渲染表格行的数据

## 27 案例-练习中遇到的小问题

## 28 案例-动态生成 checkbox 的 id 属性值

## 29 案例-实现删除品牌的功能

## 30 案例-判断用户填写的内容是否为空

## 31 案例-实现添加的功能

## 32 总结

- 能够知道 vue 的**基本使用步骤**
  - 导入 vue.js 文件
  - new Vue() 构造函数，得到 vm 实例对象
  - 声明 el 的 data 数据节点
  - MVVM 的对应关系 

- 掌握 vue 中常见**指令**的基本操作
  - 插值表达式，v-bind，v-on，v-if和v-else
  - v-for和:key，v-model

- 掌握 vue 中**过滤器**的基本用法
  - 全局过滤器 Vue.filter('过滤器名称', function)
  - 私有过滤器 filters 节点

## 33 过滤器-过滤器的基本用法

### 2. 过滤器

过滤器（Filters）是 vue 为开发者提供的功能，常用于文本的格式化。过滤器可以用在两个地方：插值表达式和 v-bind 属性绑定

过滤器应该被添加在 JavaScript 表达式的尾部，由”管道符“进行调用，示例代码如下：

```
<td>{{item.createTime | timeFilter}}</td>
```


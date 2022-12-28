const path = require('path')  //导入 node.js 中专门操作路径的模块
// 1. 导入 HTML 插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

// 2. 创建 HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html',  // 指定原文件的存放路径
  filename: './index.html',  // 指定生成的文件的存放路径
})

// 使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
module.exports = {
  // entry: '指定要处理哪个文件',
  entry: path.join(__dirname, './src/index.js'),  //打包入口文件的路径
  output: {  // 指定生成的文件要存放到哪里
    path: path.join(__dirname, './dist'),  // 输出文件的存放路径
    filename: 'bundle.js',  // 输出文件名称
  },
  /**
   * 结论：
   *  1. 开发时候一定要用 development，因为追求的是打包的速度，而不是体积；
   *  2. 发布上线的时候一定要用 production，因为上线追求的是体积小，而不是打包速度快！
   */
  mode: 'development',  // mode 用来指定构建模式，可选值有 development 和 production
  plugins: [htmlPlugin],  // 3. 通过 plugins 节点，使 htmlPlugin 插件生效
  devServer: {
    open: true,  // 初次打包完成后，自动打开浏览器
    host: '127.0.0.1',  // 实时打包所使用的主机地址
    // 在 http 协议中，如果端口号是80，则可以被省略
    port: 3000,  // 实时打包所使用的端口号
  }
}
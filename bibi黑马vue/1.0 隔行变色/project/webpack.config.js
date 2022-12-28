// 使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
module.exports = {
  /**
   * 结论：
   *  1. 开发时候一定要用 development，因为追求的是打包的速度，而不是体积；
   *  2. 发布上线的时候一定要用 production，因为上线追求的是体积小，而不是打包速度快！
   */
  mode: 'development',  // mode 用来指定构建模式，可选值有 development 和 production
}
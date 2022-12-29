const path = require('path')  //导入 node.js 中专门操作路径的模块
// 1. 导入 HTML 插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

// 2. 创建 HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html',  // 指定原文件的存放路径
  filename: './index.html',  // 指定生成的文件的存放路径
})

// 2. 按需导入插件，得到插件的构造函数之后，创建插件的实例对象
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()

// 使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
module.exports = {
  // entry: '指定要处理哪个文件',
  entry: path.join(__dirname, './src/index.js'),  //打包入口文件的路径
  output: {  // 指定生成的文件要存放到哪里
    path: path.join(__dirname, 'dist'),  // 输出文件的存放路径
    filename: 'js/bundle.js',  // 输出文件名称
  },
  /**
   * 结论：
   *  1. 开发时候一定要用 development，因为追求的是打包的速度，而不是体积；
   *  2. 发布上线的时候一定要用 production，因为上线追求的是体积小，而不是打包速度快！
   */
  mode: 'development',  // mode 用来指定构建模式，可选值有 development 和 production
  // eval-source-map 仅限在“开发模式“下使用，不建议在”生成模式“下使用
  // 此选项生成的 source map 能够保证”运行时报错的行数“与”源代码的行数“保持一致
  // devtool: 'eval-source-map',
  // 在实际发布的时候，建议大家把 devtool的值设置为 nosources-source-map 或直接关闭 SourceMap
  // devtool: 'nosources-source-map',
  devtool: 'source-map',
  // 3. 通过 plugins 节点，使 htmlPlugin 插件生效
  // 3.把创建的 cleanPlugin插件实例对象，挂载到 plugins 节点中
  plugins: [htmlPlugin, cleanPlugin],  //挂载插件
  devServer: {
    open: true,  // 初次打包完成后，自动打开浏览器
    host: '127.0.0.1',  // 实时打包所使用的主机地址
    // 在 http 协议中，如果端口号是80，则可以被省略
    port: 3000,  // 实时打包所使用的端口号
  },
  module: {  //所有第三方文件模块的匹配规则
    rules: [  //文件后缀名的匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // 处理 .less 文件的 loader
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // 处理图片文件的 loader
      // 如果需要调用的 loader 只有一个，则只传递一个字符串也行，如果有多个 loader，则必须指定数组
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
      },
      // 注意：必须使用 exclude 指定排除项，因为 node_modules 目录下的第三方包不需要被打包
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  resolve: {
    alias: {
      // 告诉 webpack，程序员写的代码中，@符号表示 src 这一层目录
      '@': path.join(__dirname, './src/')
    }
  }
}
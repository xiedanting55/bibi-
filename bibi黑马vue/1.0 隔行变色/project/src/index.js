// 1. 使用 ES6 导入语法，导入 JQuery
import $ from 'jquery'
// 导入样式（在 webpack 中，一切皆模块，都可以通过 ES6 导入语法进行导入和使用）
// 如果某个模块中，使用 from 接收到的成员为 undefind,则没必要进行接收
import '@/css/index.css'
import '@/css/index.less'

// 1. 导入图片，得到图片文件
import logo from '@/images/logo.jpg'
console.log(logo)
// 2. 给 img 标签的 src 动态赋值
$(".box").attr('src', logo)

// 2. 定义 JQuery 的入门函数
$(function () {
  // 3. 实现奇偶行变色
  $('li:odd').css('background-color', 'red')  // 奇数
  $('li:even').css('background-color', 'cyan')  // 偶数
})

// 1. 定义了名为 info 的装饰器
function info (target) {
  // 2. 为目标添加静态属性 info
  target.info = 'Person info'
}

// 3. 为 Person 类应用 info 装饰器
@info
class Person { }

//4. 打印 Person 的静态属性 info
console.log(Person.info)
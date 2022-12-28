// 1. 使用 ES6 导入语法，导入 JQuery
import $ from 'jquery'

// 2. 定义 JQuery 的入门函数
$(function () {
  // 3. 实现奇偶行变色
  // 奇数行为红色
  $('li:odd').css('background-color', 'red')
  // 偶数行为粉色
  $('li:even').css('background-color', 'pink')
})
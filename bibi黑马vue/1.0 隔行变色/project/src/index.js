// 1. 使用 ES6 导入语法，导入 JQuery
import $ from 'jquery'

// 2. 定义 JQuery 的入门函数
$(function () {
  // 3. 实现奇偶行变色
  $('li:odd').css('background-color', 'red')  // 奇数
  $('li:even').css('background-color', 'cyan')  // 偶数
})
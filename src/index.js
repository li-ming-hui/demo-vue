import Vue from 'vue'
import App from './App.vue'

// 加载 bootstrap 样式文件
import 'bootstrap/dist/css/bootstrap.css'

// 加载我们自己的自定义样式 css
import './assets/css/index.css'

new Vue({
  el: '#app',
  template: '<app></app>',
  components: {
    App
  }
})

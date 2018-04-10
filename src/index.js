import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载bootstrap样式文件
import 'bootstrap/dist/css/bootstrap.css'

// 加载自己的自定义样式 css
import './assets/css/index.css'

new Vue({
  el:'#app',
  template:'<app></app>',
  components:{
    App
  },
  router
})
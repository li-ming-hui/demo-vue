<template>
  <div>
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- <app-main></app-main> -->
          <!-- <hero-new></hero-new> -->
          <!-- 当路由匹配到路径组件的时候，会把组件渲染到这里 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 0.加载组件
// 1.注册组件，才可以在当前组件使用
// 2.使用
import AppHeader from "./components/AppHeader.vue";
import AppSidebar from "./components/AppSidebar.vue";
import Main from "./components/Main.vue";
import HeroNew from "./components/HeroNew.vue";

export default {
  components: {
    AppHeader,
    AppSidebar,
    AppMain: Main,
    HeroNew
  }
};
</script>

<style>

</style>

<template>
 <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link tag="li" exact to="/">
        <a>首页</a>
      </router-link>
      <router-link tag="li" to="/hero">
        <a>英雄管理</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
 export default {
   data () {
     return {
     }
   }
 }
</script>

<style>

 
</style>

<template>
  <div id="app">
    <!-- <Page :current="1" :total="100"></Page> -->
    <router-link :to="{name:'Hello'}">首页</router-link>
    <router-link :to="{name:'ue'}">UEditor编辑器</router-link>
    <router-link :to="{name:'courses'}">选课列表</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a{
  display: inline-block;
  margin:15px;
}

</style>
  
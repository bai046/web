<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 1, -->
    <el-container>
      <el-header><Header /></el-header>
      <el-main><Body /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//2,导入vue子组件
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

export default {
  name: "App",
  components: {
    // HelloWorld
    //3,注册vue子组件，components
    Header,
    Body,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
.el-header {
  width: 100%;
  background-color: #244152;
}
.el-footer {
  position: absolute;
  padding: 0;
  bottom: 0;
  width: 100%;
  height: 60px; /*脚部的高度*/
}
</style>

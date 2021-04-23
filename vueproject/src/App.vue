<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 1, -->
    <el-container>
      <el-header><Header /></el-header>
      <el-main>
        <!-- <Body /> -->
        <div id="main">
          <router-view></router-view>
        </div>
        
      </el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//2,导入vue子组件
import Header from "./components/header";
import Login from "./components/login";
import Footer from "./components/footer";
// import Body  from "./components/body";


export default {
  name: "App",
  components: {
    // HelloWorld
    //3,注册vue子组件，components
    Header,
    Login,
    // Body,
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
  /* position: fixed; */
  display: flex;
  justify-content: center;
  padding: 0;
  bottom: 0;
  width: 100%;
  height: 60px; /*脚部的高度*/
}
</style>
// 模板 脚本 样式

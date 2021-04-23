<template>
  <div id="header">
    <div id="title">{{message}}</div>
    <div id="function">
      <router-link to="/login"><el-button icon="el-icon-edit" round>系统登录</el-button></router-link>
      <router-link to="/work"><el-button icon="el-icon-edit" round>工作中心</el-button></router-link>
      <router-link to="/student"><el-button icon="el-icon-search" round>学生信息查询</el-button></router-link>
      <router-link to="/book"><el-button icon="el-icon-search" round>图书信息查询</el-button></router-link>
      <router-link to="/CNNode"><el-button icon="el-icon-search" round>Cnode</el-button></router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      message: "江西软件大学-新版图书管理系统",
    };
  },
};
</script>

<style>
#title {
  color: white;
  font-size: 20px;
  font-weight: bolder;
  line-height: 60px;
  display: inline-block;
  padding-left: 10px;
}

#function {
  float: right;
  /* display: inline-block; */
  /* text-align: center; */
}
/* 注意：嵌套router-link=a标签 */
#function >a> * {
  margin-top: 10px;
}

#function >a> .el-button {
  background-color: #0a9588;
  border-color: #0a9588;
  color: white;
}
</style>
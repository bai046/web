<template>
  <div id="headertest2">
    <div id="title">{{message}}</div>
    <div id="function">
      <el-button icon="el-icon-edit" round>系统登录</el-button>
      <el-button icon="el-icon-edit" round>工作中心</el-button>
      <el-button icon="el-icon-search" round>学生信息查询</el-button>
      <el-button icon="el-icon-search" round>图书信息查询</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "headertest2",
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

#function > * {
  margin-top: 10px;
}

#function > .el-button {
  background-color: #0a9588;
  border-color: #0a9588;
  color: white;
}
</style>
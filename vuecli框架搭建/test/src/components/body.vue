<template>
  <div id="login">
    <el-card class="box-card">
      <div slot="header">
        <span>系统登录</span>
        <el-button style="float: right; padding: 3px 0" type="text">找回密码</el-button>
      </div>
      <el-input id="username" placeholder="请输入用户名" v-model="user.username" clearable></el-input>
      <el-input id="password" placeholder="请输入密码" v-model="user.password" show-password></el-input>
      <!-- <el-input placeholder="请输入密码" v-model="input" show-password></el-input> -->
      <div id="submit">
        <el-button id="submitSystem">登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "body",
  data() {
    return {
      user: {
        username: "",
        password: "",
        // input:''
      }    
    };
  },
};
</script>

<style>
#login {
  width: 400px;
  margin: 0 auto;
  margin-top: 130px;
}

#submitSystem {
  background-color: #0a9588;
  width: 200px;
  display: inline-block;
  color: white;
}

#submit {
  text-align: center;
}

#username,
#password {
  margin: 5px;
}
</style>
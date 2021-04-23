<template>
  <div id="body">
    <el-card>
      <!-- solt插槽，也就是槽，是组件的一块HTML模板 https://cn.vuejs.org/v2/guide/components-slots.html-->
      <div slot="header">
        <span>系统登录</span>
        <router-link to="/login">
          <el-button style="float: right; padding: 3px 0" type="text"
            >找回密码</el-button
          >
        </router-link>
      </div>
      <el-input
        id="username"
        placeholder="请输入用户名"
        v-model="user.username"
        clearable
      ></el-input>
      <el-input
        id="password"
        placeholder="请输入密码"
        v-model="user.password"
        show-password
      ></el-input>
      <!-- <el-input placeholder="请输入密码" v-model="input" show-password></el-input> -->
      <div id="submit">
        <router-link to="/work">
          <el-button id="submitSystem">登录</el-button>
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: "",
        // input:''
      }    
    };
  },
  methods:{
    loginSystem(){
      Axios.get('/login').then(function(response){
        console.log(response);
      })
    }
  }

}
</script>

<style>
#body {
  width: 400px;
  margin: 0 auto;
  margin-top: 130px;
  /* background-color: lawngreen; */
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
  margin: 8px;
}
</style>
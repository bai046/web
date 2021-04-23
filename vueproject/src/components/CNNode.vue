<template>
  <div id="cnnode">
    <div id="ctitle">
      <a href="https://cnodejs.org/"> cnode论坛 </a>
      <div id="inp">
        <el-input placeholder="请输入内容" v-model="input">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <hr />
    <div id="cantainer">
      <!-- 对数据请求的处理，最为重要的一句话 -->
      <el-table
        style="width: 100%"
        :data="
          topicsArr.slice((currentPage - 1) * pagesize, currentPage * pagesize)
        "
      >
        <el-table-column label="author" pro="author" width="100">
          <template slot-scope="scope">
            <div style="height:30px wength:30px">
              <a href="https://cnodejs.org/user/loginname">
                <el-avatar shape="square" :src="scope.row.author.avatar_url">{{
                  scope.row.author.avatar_url
                }}</el-avatar>
              </a>
            </div>

            <span>{{ scope.row.author.loginname }}</span>
          </template>
        </el-table-column>
        <el-table-column label="reply_count" prop="reply_count" width="150">
        </el-table-column>
        <el-table-column label="visit_count" prop="visit_count" width="150">
        </el-table-column>
        <el-table-column label="title" prop="title" width="500">
        </el-table-column>
        <el-table-column label="last_reply_at" prop="last_reply_at" width="400">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 60]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="topicsArr.length"
      >
      </el-pagination>
    </div>
    <!-- <li v-for="(value, index2) in this.topicsArr" :key="index2">
      <span>
        <el-avatar :size="15" src="https://empty" @error="errorHandler">
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar> </span
      ><span>{{ value.reply_count }}<span>/</span>{{ value.visit_count }}</span>
      {{ value.title }}{{value.last_reply_at}}
    </li> -->
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      currentPage: 1, //初始页
      pagesize: 10, //    每页的数据
      topicsArr: [],
      input: "",
    };
  },
  created() {
    // console.log("123");
    /* 请求数据 get返回对象*/
    Axios.get("https://cnodejs.org/api/v1/topics").then((response) => {
      let data = response.data;
      //   let topicsArr=[];
      // 用回调函数
      let that = this;
      if (data.success) {
        that.topicsArr = data.data;
        console.log(that.topicsArr);
      }
    });
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
    errorHandler() {
      return true;
    },
  },
};
</script>

<style>
#cnnode {
  /* background-color: lawngreen; */
    border: solid;
  margin-top: 5px;
}
#ctitle {
  font-size: 20px;
  font-weight: bolder;
  /* background-color: blanchedalmond; */
}
a {
  text-decoration: none;
}
#inp{
  display: inline-block;
  width: 200px;
    
}
</style>
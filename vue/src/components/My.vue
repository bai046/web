<template>
  <div id="name">
    江西大学
    <p id="section">软件工程学院</p>
    <!-- 两种写法 重复会报错-->
    <div v-for="index in lists" v-bind:key="index">{{index}}</div>
    <div v-for="index2 in lists" :key="index2+6">{{index2}}</div>
    <div v-if="isShow">江西省</div><!-- 是否显现 -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[1,2,3,4,5,6],
      isShow:false
    }
  }
}
</script>

<style lang="less" scoped rel="stylesheet/less">
  #name{
    background-color: brown;
    #section{
      background-color: purple;
    }
  }
</style>>

// 三部分，模板，脚本，样式 自动生成插件：Vetur
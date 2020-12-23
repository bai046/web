<template>
      <div>
      <div v-for="(index,key) in nInformation" v-bind:key="key" :class="[index.active?'flag1':'flag2']" >>
          <span>{{index.id}}</span>
          <span>{{index.name}}</span>
          <span>{{index.class}}</span>
          <span>{{index.address}}</span>
          <span>{{index.active}}</span>
      </div>
      <!-- <div>{{json}}</div> -->
  </div>

</template>

<script>
// vue进入集成终端：npm install axios --save
import axios from 'axios'

// vue有生命周期
export default {
    data(){
        return{
            nInformation:[]
        }
    },
    mounted(){
        axios.get("https://www.fastmock.site/mock/4374b55d0c92bba3cf7ec656e8103e56/_information_09/api/users").then(result=>{
            // 网络请求
            this.json=result;
            var temp=result.data;
            var json=JSON.stringify(temp);
            var stu=JSON.parse(json);
            console.log(stu);
            for(var s in stu){
                this.nInformation.push(stu[s])
        }
        console.log(this.nInformation)
        
        })
        

    }
}
</script>

<style>
    .flag1{
        background-color: green;
    }
    .flag2{
        background-color: red;
    }
</style>
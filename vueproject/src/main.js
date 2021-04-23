import Vue from 'vue'
import App from './App.vue'

//引入组件
import ElementUI from 'element-ui';
//引入样式
import 'element-ui/lib/theme-chalk/index.css';
//运用组件（作为参数传入）
Vue.use(ElementUI);

Vue.config.productionTip = false

// CommonJS:npm install --save axios vue-axios
// 将下面代码加入入口文件:
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)



// vue-router
import VueRouter from "vue-router";
// 引入组件
import Login from './components/login.vue'
import Work from './components/work.vue'
import Student from './components/student.vue'
import Book from './components/book.vue'
import CNNode from "./components/CNNode.vue";
// 要告诉 vue 使用 vueRouter
// 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/work",
        component: Work
    },
    {
        path: "/student",
        component: Student
    },
    {
        path: "/book",
        component: Book
    },
    {
        path: "/CNNode",
        component: CNNode
    }
  ]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
var router = new VueRouter({
    routes
})
export default router;

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  render: h => h(App),
  router,   //注入到根实例中
}).$mount('#app')

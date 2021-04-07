import Vue from 'vue'
import App from './App.vue'

//引入组件
import ElementUI from 'element-ui';
//引入样式
import 'element-ui/lib/theme-chalk/index.css';
//运用组件（作为参数传入）
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

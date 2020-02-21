import Vue from 'vue'
//适配库
import 'lib-flexible/flexible.js'
import App from './App.vue'
import router from './router'
import * as API from './api'
import store from './store'
Vue.config.productionTip = false

//将发送请求方法加入到Vue的原型对象中
Vue.prototype.$API = API
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

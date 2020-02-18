import Vue from 'vue'
//适配库
import 'lib-flexible/flexible.js'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
//适配库
import 'lib-flexible/flexible.js'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

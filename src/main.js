import Vue from 'vue'
// import VueResource from 'vue-resource'
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.use(VueResource)
// Vue.use(axios)
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')

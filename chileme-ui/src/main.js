import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/style.css'
Vue.config.productionTip = false

// Axios.withCredentails=true

Vue.prototype.Axios = Axios   // 配置axios
Vue.use(ElementUI) //配置element-ui
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

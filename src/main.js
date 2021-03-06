import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VCharts from 'v-charts'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfonts/iconfont.css'

Vue.config.productionTip = false

Vue.use(VCharts)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

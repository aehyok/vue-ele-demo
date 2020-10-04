import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
require('./mock/mock.js')

import '@/styles/index.scss'

import './routerGuard'
Vue.use(ElementUI, {
  size: 'medium',
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './bootstrap'
import './globalFilters'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

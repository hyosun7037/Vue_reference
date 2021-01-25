import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import './assets/reset.css'

// 애플리케이션의 진입점
Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  vuetify : new Vuetify(),
  render: h => h(App),
}).$mount('#app')

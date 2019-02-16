import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


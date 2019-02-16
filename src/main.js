import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: "#fee720",
    secondary: "#545454", //
    //
  }
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


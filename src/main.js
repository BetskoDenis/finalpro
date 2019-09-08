import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './routes'
import Jq from './js/jquery-3.3.1.min.js'
import owl from './js/owl.carousel.js'
import relevator from './js/fm.revealator.jquery.js'
import Common from './js/common.js'

Vue.use (VueRouter, Jq, owl, relevator, Common);



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')

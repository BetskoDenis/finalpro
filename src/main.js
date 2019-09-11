import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './routes'
import Jq from './js/jquery-3.3.1.min.js'
import owl from './js/owl.carousel.js'
import relevator from './js/fm.revealator.jquery.js'







Vue.use (VueRouter, Jq, owl, relevator);
Vue.config.productionTip = false

new Vue({

  router,
  render: h => h(App),


}).$mount('#app')

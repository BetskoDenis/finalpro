
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import our_works from './components/our_works.vue'
import SEM from './components/SEM.vue'

import Jq from './js/jquery-3.3.1.min.js'
import owl from './js/owl.carousel.js'
import Common from './js/common.js'


export default new VueRouter({

    routes:[
     {
        path: '/',
        component: Home
     },
    {
        path: '/our_works',
        component: our_works,


    },
        {
            path: '/SEM',
            component: SEM,


        },
    ],


    mode:'history'
})



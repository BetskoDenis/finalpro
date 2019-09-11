
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import our_works from './components/our_works.vue'
import SEM from './components/SEM.vue'
import Farma from './components/ForceFarma.vue'
import Alexis from './components/Alexis.vue'
import Boost from './components/boost.vue'




export default new VueRouter({

    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/our_works',
            component: our_works
        },
        {
            path: '/SEM',
            component: SEM,


        },
        {
            path: '/Farma',
            component: Farma,


        },
        {
            path: '/Alexis',
            component: Alexis,


        },
        {
            path: '/Boost',
            component: Boost,


        },
    ],

    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
                // , offset: { x: 0, y: 10 }
            }
        }
    },
    mode: 'history'


})

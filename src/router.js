import Vue from 'vue'
import Router from 'vue-router'
import search from "./components/search.vue"

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
        path: '/search',
        name: 'Search',
        component: search
    }, ]
})
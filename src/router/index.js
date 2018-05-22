import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const About = { template: '<p>about page</p>' }
import b from './../b.vue'

let routes = [
        {
                path: '/',
                name: '',
        },
        {
                path: '/aa',
                name: 'aa',
                meta: {
                        backState: '/'
                },
                component: httpVueLoader("../src/a.vue")
        },
        {
                path: '/bb',
                name: 'bb',
                meta: {
                        backState: '/'
                },
                component: About
        },
        {
                path: '/b',
                name: 'b',
                meta: {
                        backState: '/'
                },
                component: b
        }
]

var router = new VueRouter({
        routes
})

router.addRoutes([
        {
                path: '/test-add',
                component: httpVueLoader("src/a.vue")

        }

])

router.beforeEach((to, from, next) => {
       next()
})


export default router

import Vue from 'vue'
import App from './App.vue'

import router from './router'
Vue.use(httpVueLoader);



new Vue({
        el: '#app',
        router,
        render: h => h(App),
})

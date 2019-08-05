import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import elementUI from 'element-ui'

Vue.use(elementUI)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

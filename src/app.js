require('./css/base.less');
require('./css/page.css');
var Vue=require('vue');
var VueRouter=require('vue-router');
var AppRouters=require('./routers');
Vue.use(VueRouter)
// configure router
var router = new VueRouter()

router.map(AppRouters)

// start app
var App = Vue.extend({})

router.redirect({
    '*':'/index/home'
})

router.start(App, '#app')

var Vue=require('vue');
//简单的调用组件
var Foo=Vue.component('Foo', require("./components/Foo.vue"));
var Index=Vue.component('Index', require("./components/index.vue"));
var Topics=Vue.component('Topics', require("./components/topics.vue"));
var Message=Vue.component('Message', require("./components/message.vue"));
var User=Vue.component('Message', require("./components/user.vue"));
var Home=Vue.component('Home', require("./components/home.vue"));
var Address_list=Vue.component('Address_list', require("./components/Address_list.vue"));
var Address_add=Vue.component('Address_add', require("./components/Address_add.vue"));
var Address_update=Vue.component('Address_update', require("./components/Address_update.vue"));
var Orders=Vue.component('Orders', require("./components/Orders.vue"));
var Service=Vue.component('Service', require("./components/service.vue"));

//设置路由
var routers={
  '/index': {
    component: Index,
    // add a subRoutes map under /foo
    subRoutes: {
      '/': {
        // This component will be rendered into Foo's <router-view>
        // when /foo is matched. Using an inline component definition
        // here for convenience.
        component:Home
      },
      '/home': {
        // Bar will be rendered inside Foo's <router-view>
        // when /foo/bar is matched
        component: Home
      },
      '/topics': {
        // Bar will be rendered inside Foo's <router-view>
        // when /foo/bar is matched
        component: Topics
      },
      '/message': {
        // same for Baz, but only when /foo/baz is matched
        component: Message
      },
      '/user': {
        // same for Baz, but only when /foo/baz is matched
        component: User
      }
    }
  }
  ,'/address': {component: Address_list}
  ,'/address/add': {component: Address_add}
  ,'/address/update': {component: Address_update}
  ,'/message': {component: Message}
  ,'/user': {component: User}
  ,'/orders': {component: Orders}
  ,'/service': {component: Service}
}

module.exports=routers;

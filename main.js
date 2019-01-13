
import './style.css';
import Vue from 'vue';
import VueRouter from "vue-router";
import App from './app.vue'
// document.getElementById('app').innerHTML = "Hello Webpack";


Vue.use(VueRouter);
debugger;
const Routers = [
    {
        path:'/index',
        component:(resolve)=>require(['./router/views/index.vue'],resolve)
    },
    {
        path:'/about',
        component:(resolve)=>require(['./router/views/about.vue'],resolve)
    },
    {
        path:'/user/:id',
        component:(resolve)=>require(['./router/views/user.vue'],resolve)
    },
    {
        path:'*',
        redirect:'/index'
    }
];

const RouterConfig = {
    mode:'history',
    routes:Routers
};

const router = new VueRouter(RouterConfig);
new Vue({
    el:'#app',
    router:router,
    render:h=>h(App)
});
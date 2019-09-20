import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './pages/Index.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/thetime',
            component: () => import(/* webpackChunkName: "foo" */ './pages/Time.vue')
        },
    ]
});

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Skills from '@/views/Skills.vue';
import Experience from '@/views/Experience.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Skills',
        name: 'Skills',
        component: Skills,
    },
    {
        path: '/Experience',
        name: 'Experience',
        component: Experience,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
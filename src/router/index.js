import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import skills from '@/components/skills.vue';
import experience from '@/components/experience.vue';
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
        path: '/skills',
        name: 'skills',
        component: skills,
    },
    {
        path: '/experience',
        name: 'experience',
        component: experience,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
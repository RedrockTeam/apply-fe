import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Apply from './components/apply/index'
import About from './components/apply/index'

Vue.config.debug = true;
let Index = Vue.extend({});

Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter();

router.map({
    '/app': {
        component: App
    },
    '/apply': {
        component: Apply
    },
    '/about': {
        component: About
    }
});

router.redirect({
  '*': '/app'
});

router.start(Index, '#app');

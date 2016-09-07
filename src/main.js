import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Apply from './components/apply/index'
import About from './components/about/index'
import Check from './components/check/index'

Vue.config.debug = true;
let Index = Vue.extend({});

Vue.use(VueRouter);
Vue.use(VueResource);

// Vue.http.options.headers={
//     'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
// };
Vue.http.options.emulateJSON = true;
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

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
    },
    '/check': {
        component: Check
    }
});

router.redirect({
  '*': '/app'
});

router.start(Index, '#app');

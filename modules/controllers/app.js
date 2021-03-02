import 'babel-polyfill';

import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App.vue';

window.app = new Vue({
    el: '#app-index',
    components: {
        App
    },
    template: '<App/>'
});

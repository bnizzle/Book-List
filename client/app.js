import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

Vue.use(Buefy);

export { app, router, store }

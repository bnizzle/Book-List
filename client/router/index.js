import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Callback from '../components/callback'
import Post from '../views/Post'

import { requireAuth } from '../services/auth';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      path: '/callback',
      component: Callback
    },
    {
      name: 'post',
      path: '/post',
      beforeEnter: requireAuth,
      component: Post
    }
  ]
})

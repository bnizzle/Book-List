<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">Bnizzle's Books</router-link>
    </div>

    <div class="navbar-start">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="post">Recommend a Book</router-link>
    </div>

    <div class="navbar-end">
      <button class="button" v-show="isLoggedIn()" @click="handleLogout()">Logout</button>
      <button class="button" v-show="!isLoggedIn()" @click="handleLogin()">Login</button>
    </div>
  </nav>
</template>

<script>
import { isLoggedIn, login, logout } from '../../services/auth';
export default {
  methods: {
    handleLogin() {
      login();
    },
    handleLogout() {
      logout();
    },
    isLoggedIn() {
      return isLoggedIn();
    }
  }
}
</script>


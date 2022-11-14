<template>
    <div class="sidebar">
        <h1>Welcome</h1>
        <h1>{{username}}</h1>
        <div class="navItem">
            <i class="fas fa-list-ol"></i>
            <router-link to="/highscore">Highscore</router-link>
        </div>
        <div class="navItem">
            <i class="fas fa-user"/>
            <router-link to="/highscore">Profile</router-link>
        </div>
        <div class="navItem">
            <i class="fas fa-gamepad"/>
            <router-link to="/highscore">Game</router-link>
        </div>
        <div class="navItem">
            <i class="fas fa-list-ol"/>
            <router-link to="/highscore">Login</router-link>
        </div>
    </div>
</template>

<script>
import { getUserToken, getUsername } from '../models/data';
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'Sidebar',
  data() {
    return {
      token: '',
      username: ''
    }
  },
  created() {
    this.token = getUserToken();
    this.username = getUsername();
  }
}
</script>

<style>
.sidebar {
  color: rgb(6, 134, 23);
  background-color: rgb(33, 34, 33);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 17%;
}
.sidebar h1 {
  height: 1.0em;
  text-align: left;
}

.sidebar h2 {
  color: rgb(3, 134, 3);
}
</style>
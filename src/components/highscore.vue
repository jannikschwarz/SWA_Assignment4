<template>
    <Sidebar />
    <div>

    </div>
</template>

<script>
import { getUserToken, getGames } from '../models/data';
import Sidebar from '../components/sidebar.vue'

export default {
  data() {
    return {
      token: '',
      games: [],
    }
  },
  created() {
    this.token = getUserToken();
    this.games = getGames();
  },
  components: {
    Sidebar,
  }
}
</script>
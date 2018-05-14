<template>
  <div class="app-container">
      <template v-if="$route.matched.length">
        <router-view></router-view>
      </template>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn () {
      return this.$store.state.loggedIn
    }
  }
}
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
}

body {
    font: 14px -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #F3F5F6;
    color: #4d4d4d;
}

ul {
  padding: 0;
}

h1, h2 {
  text-align: center;
}

.app-container {  }
</style>

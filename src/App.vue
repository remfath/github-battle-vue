<template>
  <div id="app" class="container">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'app',
  components: {
    AppNav: Nav
  }
}
</script>

<style>
  .container {
    margin: 0 auto;
  }
</style>

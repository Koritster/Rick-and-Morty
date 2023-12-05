<script setup>
  import Home from './components/Home.vue'
  import Character from './components/Characters.vue'
  import axios from 'axios'
</script>

<template>
  <nav class="navbar">
    <router-link to="/" class="text-light fs-2">Inicio</router-link>
  </nav>

  <div id="title">
    <h1 class="text-light">Rick and Morty</h1>
  </div>

  <br>

  <router-view></router-view>
</template>

<script>
export default{
  name: 'App',
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }
</style>

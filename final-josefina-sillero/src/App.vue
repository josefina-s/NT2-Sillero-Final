<template>
  <div id="app">
    <h1>M. Josefina Sillero - Final</h1>
    <Conversor/>
  </div>
</template>

<script>

import Conversor from './components/Conversor.vue';
export default {
  name: 'App',
  components: {
    Conversor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

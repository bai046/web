<template>
  <div id="app">
    <img src="./assets/logo.png">
    <My/><!-- *** -->
  </div>
</template>

<script>
import My from './components/My'//***

export default {
  name: 'App',
  components: {
    My//***
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color:green;
}
</style>

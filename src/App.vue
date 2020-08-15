<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    import  rem from './adaptive-version2'
export default {
  name: 'App'
}
</script>

<style>
html,body,#app {
    width: 100%;
    height:100%;
    max-width: 750px;
    position: relative;
    margin: auto;
}
body {
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    position: relative;
    height:100%;
}
a {
    text-decoration: none;
}
a:active {background: transparent;}
p {margin: 0;padding: 0;}
ul,li{ padding:0;margin:0;list-style:none}
</style>

<template>
  <div id="app">
    <globalHeader></globalHeader>
    <router-view />
  </div>
</template>

<script>
import globalHeader from './components/globalHeader.vue';
import 'normalize.css';

export default {
    name: 'App',
    components: {
        globalHeader,
    },
};
</script>

<style lang="scss">
$imageColor: #42b983;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color:$imageColor;
    }
  }
}
</style>

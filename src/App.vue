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

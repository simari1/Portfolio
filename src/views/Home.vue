<template>
  <div class="home">
    <HelloWorld msg="Welcome to @simari's portfolio site!!!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/views/HelloWorld.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
};
</script>

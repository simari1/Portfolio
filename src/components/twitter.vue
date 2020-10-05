<template>
  <Timeline
    :id="user_id"
    sourceType="profile"
    :options="{ height: twitterHeight }"
  />
</template>

<script>
import { Timeline } from 'vue-tweet-embed';

export default {
    components: {
        Timeline,
    },
    data() {
        return {
            user_id: 'Italianimals1',
            twitterHeight: '500',
        };
    },
};
</script>

<style scoped lang="scss">
.container {
  font-size: 20px;
}
</style>
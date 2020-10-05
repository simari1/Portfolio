<template>
  <div class="container">
    <div class="items d-flex flex-wrap-reverse justify-content-center"
            v-for="skill in skills" :key="skill.id">
      <div class="item-img col-md-6 col-12 aligh-self-center">
          <img :src="require(`../assets/img/${skill.logo}`)" />
      </div>
      <div class="col-md-5 col-12 p-0 align-self-center">
        <div class="item-title">
            <h2>{{skill.name}}</h2>
            <h3><b-badge variant="primary">{{skill.years}}年</b-badge></h3>
        </div>
        <p>
          {{skill.explanation}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import skillsJson from '../assets/skills.json';

export default {
    data() {
        return {
            skills: skillsJson,
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
  .items {
    display: flex;
    border: $border;
    padding: 10px;
    min-height: 250px;
    &:nth-child(odd){
      flex-direction: row-reverse;
    }
    .item-title{
      h2, h3{
          vertical-align: top;
          display: inline-block;
          margin-left: 5px;
          margin-right: 5px;
      }
    }

    .item-img{
      margin: auto 0;
    }
    img {
      max-width: 300px;
      height: auto;
      padding: 0 15px;
    }
  }
}
</style>
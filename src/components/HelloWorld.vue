<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>

    <!-- Who I am -->
    <div class="card shadow-sm">
      <div class="card-header"><h2>Who I am</h2></div>
      <div class="card-body shadow-sm">
        <h4 class="card-title">@simariについて</h4>
        <p class="card-text">
          <ul>
              <li>30代前半</li>
              <li>都内のSIerで働いています</li>
              <li>東京都小金井市に住んでいます</li>
          </ul>
        </p>
      </div>
    </div>

    <!-- About this page -->
    <div class="card">
      <div class="card-header shadow-sm">
        <h2>About this page</h2>
      </div>
      <div class="card-body shadow-sm">
        <h4 class="card-title">このページについて</h4>
        <p class="card-text">
          このページ@simariのポートフォリオサイトです。<br />
          このページは勉強を兼ねてVue.js, Bootstrapを利用して作られています。
        </p>
      </div>
    </div>

    <!-- Essential Links -->
    <div class="card">
      <div class="card-header shadow-sm"><h2>Essential Links</h2></div>
      <div class="card-body shadow-sm">
        <h4 class="card-title">@simariを知るためのリンク集です</h4>
            <ul class="list-group list-group-horizontal-md">
                <li class="list-group-item"><a href="https://github.com/simari1" target="_blank">GitHub</a></li>
                <li class="list-group-item"><a href="https://qiita.com/simari" target="_blank">Qiita</a></li>
                <li class="list-group-item"><a href="https://twitter.com/Italianimals1" target="_blank">Twitter</a></li>
            </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container {
  font-size: 20px;
  color: #666;
  margin-top: 60px;
}
h1 {
  margin: 20px;
}
a {
  color: #42b983;
}
.card {
  margin-bottom: 40px;
  .list-group {
    justify-content: center;
  }
}
ul {
  list-style-position: inside;
  li {
    margin-bottom: 10px;
    list-style-image: url("../assets/icons/check.svg");
  }
}
</style>

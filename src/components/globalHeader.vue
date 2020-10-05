<template>
  <div>
    <div>
      <b-nav class="bg-dark">
        <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
          <router-link class="nav-link px-4 py-3" to="/"
            ><span class="text-white">Home</span></router-link
          >
          <router-link class="nav-link px-4 py-3" to="/Skills"
            ><span class="text-white">Skills</span></router-link
          >
          <router-link class="nav-link px-4 py-3" to="/Experience"
            ><span class="text-white">Experience</span></router-link
          >
        </div>
      </b-nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
$navBgCol: #4e4e4e;
div {
  align-items: baseline;
  .nav {
    background-color: $navBgCol;
    .nav-item {
      align-content: center;
      font-size: 1.2em;
      &:first-child {
        font-weight: bold;
        font-size: 1.5em;
      }
    }
  }
}
</style>

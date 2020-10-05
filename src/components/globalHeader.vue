<template>
  <div>
    <div>
      <b-nav class="bg-dark">
        <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
          <b-nav-item href="/"><span class="text-white">Home</span></b-nav-item>
          <b-nav-item href="/Skills"
            ><span class="text-white">Skills</span></b-nav-item
          >
          <b-nav-item href="/Experience"
            ><span class="text-white">Experience</span></b-nav-item
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

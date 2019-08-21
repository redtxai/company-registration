<template>
  <article class="home">
    <header>
      HOME / COMPANY DATA
    </header>
    <section class="main">
      <LateralMenu/>
      <router-view />
    </section>
  </article>
</template>

<script>
import LateralMenu from "./LateralMenu.vue";

export default {
  name: 'Home',
  components: {
    LateralMenu
  }
};
</script>

<style lang="scss" scoped>

  .home {
    margin-left: auto;
    margin-right: auto;
    width: 1224px;
    padding-bottom: 60px;

    header {
      margin-top: 16px;
      margin-bottom: 16px;
      color: #7E7E7E;
    }

    .main {
      display: flex;
    }
  }

</style>

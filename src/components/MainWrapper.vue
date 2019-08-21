<template>
  <main>
    <header>

    </header>
    <Home/>
    <footer>

    </footer>
  </main>
</template>

<script>
import Home from "./Home/Home.vue";

export default {
  name: 'MainWrapper',
  components: {
    Home
  }  
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

main {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: $main-background;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    height: 70px;
    background-color: $header-background;
  }

  footer {
    width: 100%;
    height: 110px;
    background-color: $footer-background;
  }
}
</style>

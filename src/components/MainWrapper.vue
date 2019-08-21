<template>
  <main>
    <Header/>
    <Home/>
    <Footer/>
  </main>
</template>

<script>
import Header from "./Header/Header.vue";
import Home from "./Home/Home.vue";
import Footer from "./Footer/Footer.vue";

export default {
  name: 'MainWrapper',
  components: {
    Header,
    Home,
    Footer
  },
  created() {
    this.$store.dispatch('setDefaultState')
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
}
</style>

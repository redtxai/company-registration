<template>
  <header>
    <div class="logo"></div>
    <div class="search"></div>
    <div class="top-menu"></div>
    <div class="profile"></div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';

  header {
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    padding: 15px 40px;
    background-color: $header-background;
    display: flex;
    justify-content: space-between;

    .logo {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background-color: $logo-color;
    }

    .search{
      width: 400px;
      height: 40px;
      background-color: $search-color;
    }

    .top-menu {
      width: 250px;
      height: 40px;
      background-color: $top-menu-color;
    }

    .profile {
      width: 120px;
      height: 40px;
      background-color: $profile-color;
    }
  }
</style>
<template>
  <footer>
    <div class="wrapper">
      <div class="links"></div>
      <div class="social-media"></div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';

  footer {
    width: 100%;
    height: 110px;
    background-color: $footer-background;
    box-sizing: border-box;
    padding: 15px 40px;
    display: flex;

    .wrapper {
      margin: auto;
      width: 935px;
      display: flex;
      justify-content: space-between;

      .links {
        width: 340px;
        height: 80px;
        background-color: $links-color;
      }

      .social-media {
        width: 220px;
        height: 80px;
        background-color: $social-media-color;
      }
    }
  }
</style>
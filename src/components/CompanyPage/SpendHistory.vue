<template>
  <section class="spend-history">
  </section>
</template>

<script>
  export default {
    name: 'SimilarCompanies',
    props: {
      graphic: {
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';

  .spend-history {
    border: 1px solid $border-default;
    border-radius: 4px;
    background: $components-background;
    width: 100%;
    height: 140px;
  }
</style>
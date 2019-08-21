<template>
  <article>
    <header>
    </header>
    <section class="wrapper">
      <section class="activities">
      </section>
      <section class="company-data">
        <div class="standard-block"></div>
        <div class="standard-block"></div>
        <div class="standard-block"></div>
      </section>
    </section>
  </article>
</template>

<script>
  export default {
    name: 'CompanyPage'
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';

  article {
    width: 730px;
    box-sizing: border-box;
    padding: 0px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    
    header {
      background: $components-background;
      width: 100%;
      height: 120px;
    }

    .wrapper {
      margin-top: 20px;
      width: 100%;
      height: 460px;

      display: flex;
      justify-content: space-between;

      .activities {
        width: 400px;
        height: 100%;
        border: 1px solid $border-default;
        border-radius: 4px;
        background: $components-background;
      }

      .company-data{
        width: 310px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .standard-block {
          border: 1px solid $border-default;
          border-radius: 4px;
          background: $components-background;
          width: 100%;
          height: 140px;
        }
      }
    }
  }
</style>
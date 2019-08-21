<template>
  <article>
    <header>
    </header>
    <section class="wrapper">
      <Activities/>
      <section class="company-data">
        <SimilarCompanies/>
        <SpendHistory/>
        <SpendHistory :graphic="false"/>
      </section>
    </section>
  </article>
</template>

<script>
import Activities from "./Activities.vue";
import SimilarCompanies from "./SimilarCompanies.vue";
import SpendHistory from "./SpendHistory.vue";

export default {
  name: 'CompanyPage',
  components: {
    Activities,
    SimilarCompanies,
    SpendHistory
  }
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

      .company-data{
        width: 310px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
</style>
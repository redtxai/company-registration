<template>
  <section>
    <div @click="navGo('data')" :class="{ selected: $route.meta.module === 'company-data' }">
      COMPANY DATA
    </div>
    <div @click="navGo('table')" :class="{ selected: $route.meta.module === 'company-table' }">
      COMPANY TABLE
    </div>
    <div @click="navGo('page')" :class="{ selected: $route.meta.module === 'company-page' }">
      COMPANY PAGE
    </div>
  </section>
</template>

<script>
export default {
  name: 'LateralMenu',
  methods: {
    navGo (route) {
      this.$router.push({ name: `company-${route}` })
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';

  section {
    display: flex;
    flex-direction: column;
    width: 185px;

    div {
      user-select: none;
      border: 1px solid $border-default;
      width: 100%;
      height: 60px;
      line-height: 60px;
      padding-left: 20px;
      box-sizing: border-box;
      color: $font-blue;
      font-weight: bold;
      font-size: 12px;
      background-color: $components-background;

      &:hover {
        cursor: pointer;
      }

      &:nth-child(even):not(:last-child) {
        border-top: 0px;
        border-bottom: 0px;
      }

      &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }

    .selected {
      color: $form-font-color;
      border-left: 4px solid $header-background;
      padding-left: 17px;
    }
  }
</style>

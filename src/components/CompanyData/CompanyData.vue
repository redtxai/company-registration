<template>
  <article>
    <header>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique. Ut enim ad minim veniam.
    </header>
    <section class="form">
      <InputField
        label="COMPANY NAME"
        placeholder="Your Company Name"
        type="text"
        v-model="company.name"
      />
      <InputField
        label="COMPANY SPEND"
        placeholder="$150,000"
        type="money"
        v-model="company.spend"
      />
      <MinMaxInputField
        label="COMPANY SPEND ABILITY"
        placeholder="$150,000 - $300,000"
        type="money"
        v-model="company.spendAbility"
      />
    </section>
    <footer>
      <button @click="alert('save')">SAVE</button>
    </footer>
  </article>
</template>

<script>
import InputField from "./form-components/InputField.vue";
import MinMaxInputField from "./form-components/MinMaxInputField.vue";

export default {
  name: 'CompanyData',
  components: {
    InputField,
    MinMaxInputField
  },
  data () {
    return {
      company: {
        name: '',
        spend: '',
        spendAbility: {
          min: '',
          max: ''
        },
        notes: ''
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';

  article {
    background-color: $components-background;
    border: 1px solid $border-default;
    border-radius: 4px;
    width: 730px;
    box-sizing: border-box;
    padding: 20px;
    margin-left: 20px;

    header {
      color: $form-font-color;
    }

    section {
      display: flex;
      flex-direction: column;

      & > * {
        padding-top: 30px;
      }
    }

    footer {
      padding-top: 30px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }

</style>

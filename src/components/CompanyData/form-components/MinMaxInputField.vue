<template>
  <div class="input-field">
    <label :for="name">
      {{ label }}
    </label>
    <input
      v-if="showInputPlaceHolder"
      @click="isFocused = true"
      :name="name"
      :id="name"
      :placeholder="`e.g. ${placeholder}`"
    />
    <div class="inputs-container" v-else>
      <input
        :name="name"
        :id="name"
        :placeholder="`e.g. $150,000`"
        v-model="inputValueMin"
        v-money="inputValueMin ? money : null"
        @input="updateValue"
      />
      <input
        v-if="type === 'money'"
        :name="name"
        :id="name"
        :placeholder="`e.g. $300,000}`"
        v-model="inputValueMax"
        v-money="inputValueMax ? money : null"
        @input="updateValue"
      />
    </div>
  </div>
</template>

<script>
import { VMoney } from 'v-money'

export default {
  name: "MinMaxInputField",
  props: {
    value: {
      default: ""
    },
    type: {
      default: "text"
    },
    name: {
      default: "name"
    },
    label: {
      default: "Name"
    },
    placeholder: {
      default: ""
    }
  },
  directives: { money: VMoney },
  data() {
    return {
      money: {
        prefix: '$ ',
        precision: 0,
        masked: false
      },
      spendAbility: {
        min: 0,
        max: 0
      },
      isFocused: false,
      inputValueMin: '',
      inputValueMax: '',
    };
  },
  computed: {
    showInputPlaceHolder() {
      return !this.isFocused
    }
  },
  created() {
    this.spendAbility = this.value;
  },
  methods: {
    updateValue() {
      // this.$emit("input", this.inputValue);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

.input-field {
  background: white;
  width: 50%;
  height: 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: 400;

  label {
    font-size: 12px;
    line-height: 20px;
    height: 20px;
    text-align: left;
    font-weight: bold;
  }

  .inputs-container {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;

    & > input {
      width: 47%;
    }
  }
}
</style>

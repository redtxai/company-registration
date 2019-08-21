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
      readonly
      :value="getValueForInput"
    />
    <div class="inputs-container" v-else>
      <input
        :name="name"
        :id="name"
        :placeholder="`e.g. $150,000`"
        v-model.lazy="inputValueMin"
        v-money="inputValueMin ? money : null"
        @keypress="avoidMinusKey($event)"
      />
      <input
        v-if="type === 'money'"
        :name="name"
        :id="name"
        :placeholder="`e.g. $300,000`"
        v-model.lazy="inputValueMax"
        v-money="inputValueMax ? money : null"
        @keypress="avoidMinusKey($event)"
      />
      <button :disabled="validateMinMax" @click="updateValue">OK</button>
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
    },
    validateMinMax() {
      const min = parseInt(this.inputValueMin.match(/\d+/g));
      const max = parseInt(this.inputValueMax.match(/\d+/g));
      if (!max) {
        return true
      }
      return !(min < max)
    },
    getValueForInput() {
      const min = parseInt(this.inputValueMin.match(/\d+/g));
      const max = parseInt(this.inputValueMax.match(/\d+/g));
      if (!max) {
        return '';
      }
      return `${this.inputValueMin} - ${this.inputValueMax}`
    }
  },
  created() {
    this.inputValueMin = this.value.min;
    this.inputValueMax = this.value.max;
  },
  methods: {
    updateValue() {
      this.isFocused = false
      this.$emit("input", { min: this.inputValueMin, max: this.inputValueMax });
    },
    avoidMinusKey(evt) {
      if (evt.keyCode === 45) {
        evt.preventDefault();
      }
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
      width: 42%;
    }

    button {
      width: 40px;
      height: 40px;
    }
  }
}
</style>

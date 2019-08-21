<template>
  <div class="input-field">
    <label :for="name">
      {{ label }}
    </label>
    <input
      v-if="type === 'money'"
      :name="name"
      :id="name"
      :placeholder="`e.g. ${placeholder}`"
      v-model="inputValue"
      v-money="inputValue ? money : null"
      @input="updateValue"
      @keypress="avoidMinusKey($event)"
    />
    <input
      v-else
      :type="type"
      :name="name"
      :id="name"
      :placeholder="`e.g. ${placeholder}`"
      v-model="inputValue"
      @input="updateValue"
    />
  </div>
</template>

<script>
import { VMoney } from 'v-money'

export default {
  name: "InputField",
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
      inputValue: ""
    };
  },
  created() {
    this.inputValue = this.value;
  },
  methods: {
    updateValue() {
      this.$emit("input", this.inputValue);
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

  input {
    width: 100%;
    height: 40px;
    font-size: 14px;
    padding: 5px 15px;
    color: $font-blue;
    border-radius: 4px;
    border: 1px solid $border-default;
    outline: none;

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      font-size: 14px;
      color: $border-default;
    }
  }
}
</style>

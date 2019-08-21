<template>
  <div class="text-area">
    <label :for="name">
      {{ label }}
    </label>
    <textarea
      @click="$emit('click')"
      :name="name"
      :id="name"
      :readonly="readonly"
      :placeholder="`e.g. ${placeholder}`"
      :value="inputValue"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    value: {
      default: ""
    },
    name: {
      default: "name"
    },
    label: {
      default: "Name"
    },
    placeholder: {
      default: ""
    },
    readonly: {
      default: false
    }
  },
  computed: {
    inputValue() {
      return this.value;
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

.text-area {
  background: white;
  width: 50%;

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

  textarea {
    width: 100%;
    box-sizing: border-box;
    height: 120px;
    font-size: 14px;
    padding: 10px 15px;
    color: $font-blue;
    border-radius: 4px;
    border: 1px solid $border-default;
    outline: none;
    resize: none;

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      font-size: 14px;
      color: $border-default;
    }
  }
}
</style>

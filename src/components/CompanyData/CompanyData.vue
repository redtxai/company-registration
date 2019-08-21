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
      <TextArea
        label="NOTES"
        placeholder="Good Tech Company"
        v-model="company.notes"
        @click="showTextAreaLightBox"
        :readonly="true"
      />
    </section>
    <footer>
      <button @click="alert('save')">SAVE</button>
    </footer>
    <div v-show="showLightBox" class="backdrop" @click="hideTextAreaLightBox">
    </div>
    <div v-if="showLightBox" class="textarea-lightbox">
      <span @click="hideTextAreaLightBox">X</span>
      <TextArea
        label="ADDITIONAL NOTES"
        placeholder="Good Tech Company"
        v-model="fakeNotes"
      />
      <footer><button @click="saveNotes">SAVE</button></footer>
    </div>
  </article>
</template>

<script>
import InputField from "./form-components/InputField.vue";
import MinMaxInputField from "./form-components/MinMaxInputField.vue";
import TextArea from "./form-components/TextArea.vue";

export default {
  name: 'CompanyData',
  components: {
    InputField,
    MinMaxInputField,
    TextArea
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
      },
      fakeNotes: '',
      showLightBox: false
    }
  },
  methods: {
    showTextAreaLightBox() {
      this.fakeNotes = this.company.notes
      this.showLightBox = true
    },
    hideTextAreaLightBox() {
      this.showLightBox = false
    },
    saveNotes() {
      this.company.notes = this.fakeNotes
      this.showLightBox = false
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

      .textarea-lightbox {
        width: 730px;
        z-index: 11;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 30px;
        display: flex;
        flex-direction: column;
        background-color: #FFFFFF;
        border-radius: 4px;

        span {
          position: absolute;
          right: 32px;
          top: 32px;

          &:hover {
            cursor: pointer;
          }
        }
        
        /deep/ .text-area {
          width: 100%;
          height: 200px;

          textarea {
            height: 160px;
          }
        }

        footer {
          width: 100%;
          height: 60px;
          box-sizing: border-box;
        }
      }
    }

    footer {
      padding-top: 30px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    .backdrop {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: #000000;
      opacity: 0.5;
      z-index: 10;
    }
  }

</style>

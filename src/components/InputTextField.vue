<template>
  <div>
    <label
      v-if="inputLabel"
      for="inputName"
    >
      {{ inputLabel }}
    </label>
    <input
      type="text"
      :class="inputClass"
      :placeholder="inputPlaceholder"
      :name="inputName"
      @change="validateInput"
    />
    <p
      v-show="hasErrors"
      class="errorMessageClassName">
      {{ inputError }}
    </p>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: {
      inputLabel: {
        type: [String, Boolean],
        default: false,
      },
      inputName: {
        type: String,
        default: 'textInput',
      },
      inputClassName: {
        type: String,
        default: 'input-class',
      },
      inputErrorClassName: {
        type: String,
        default: 'input-error-class',
      },
      inputPlaceholder: {
        type: String,
        default: '',
      },
      inputValidationRules: {
        type: Object,
        default() {
          return {
            required: true,
            min: 3,
            max: 20,
          };
        },
      },
    },
    computed: {
      errorsList() {
        return this.$store.getters.getErrors;
      },
      hasErrors() {
        return this.errorsList &&
          this.errorsList[this.inputName] &&
          this.errorsList[this.inputName].length;
      },
      inputError() {
        if (this.hasErrors) {
          return this.errorsList[this.inputName][0];
        }
        return false;
      },
      inputClass() {
        const obj = {};
        obj[this.inputClassName] = true;
        obj[this.inputErrorClassName] = this.errorsList[this.inputName] &&
          this.errorsList[this.inputName].length;
        return obj;
      },
    },
    methods: {
      ...mapActions({
        addError: 'addError',
        removeError: 'removeError',
      }),
      validateInput(e) {
        const inputValue = e.target.value;
        const errorOwner = e.target.name;
        const rules = this.inputValidationRules;
        // TODO - this needs to be refactored!
        if (rules.required) {
          const errorObj = {
            errorOwner,
            errorMessage: 'This field is required.',
          };
          if (inputValue && inputValue.length) {
            this.$store.dispatch('removeError', errorObj);
          } else {
            this.$store.dispatch('addError', errorObj);
          }
        }
        if (rules.min) {
          const errorObj = {
            errorOwner,
            errorMessage: `Value of this field has to be at least ${rules.min} characters long.`,
          };
          if (rules.min <= inputValue.length) {
            this.$store.dispatch('removeError', errorObj);
          } else {
            this.$store.dispatch('addError', errorObj);
          }
        }
        if (rules.max) {
          const errorObj = {
            errorOwner,
            errorMessage: `Value of this field has to be under ${rules.max} characters long.`,
          };
          if (rules.max >= inputValue.length) {
            this.$store.dispatch('removeError', errorObj);
          } else {
            this.$store.dispatch('addError', errorObj);
          }
        }
      },
    },
  };
</script>

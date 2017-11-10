<template>
  <div>
    <form class="login__form">
      <input
        type="text"
        name="login-input"
        :class="inputClass"
        placeholder="Your nickname"
        v-model.lazy="userName"
      />
      <button
        class="login__submit-button"
        @click="submitLoginForm">
        Start
      </button>
      <p
        v-show="hasErrors"
        class="login__form-error">
        {{ inputError }}
      </p>
    </form>
  </div>
</template>

<script>
  import { validateLoginForm } from './../helpers/validation';

  export default {
    computed: {
      userName: {
        get() {
          return this.$store.getters.getUserName;
        },
        set(newUserName) {
          this.$store.dispatch('updateUserName', newUserName);
        },
      },
      errorsList() {
        return this.$store.getters.getErrors;
      },
      hasErrors() {
        return this.errorsList &&
          this.errorsList.length;
      },
      inputClass() {
        const obj = {};
        obj[this.inputClassName] = true;
        obj[this.inputErrorClassName] = this.hasErrors;
        return obj;
      },
      inputError() {
        if (this.hasErrors) {
          return this.errorsList[0];
        }
        return false;
      },
    },
    data() {
      return {
        errors: {},
        inputClassName: 'login__text-input',
        inputErrorClassName: 'login__text-input--has-errors',
      };
    },
    methods: {
      submitLoginForm(e) {
        e.preventDefault();
        if (validateLoginForm(this.userName)) {
          const startTime = new Date();
          this.$store.dispatch('markStartTime', startTime);
          this.$store.dispatch('closePopup');
        }
      },
    },
  };
</script>

<style lang="scss">
  .login__form {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: $standard-padding 0;
    width: 300px;
  }

  .login__form-error {
    color: $red;
    font-size: $small-size;
    order: 1;
    width: 100%;
  }

  .login__text-input {
    @include borderRadiuses($standard-border-radius, 0, 0, $standard-border-radius);

    border: 1px solid $gray-light;
    flex: 1;
    margin: 0;
    padding: $small-padding $standard-padding;

    &.login__text-input--has-errors {
      border-color: $red;
      color: $red;

      & + .login__submit-button {
        background: $red;
        border-color: $red;
      }
    }
  }

  .login__submit-button {
    @include borderRadiuses(0, $standard-border-radius, $standard-border-radius, 0);

    background: $green;
    border: 1px solid $green;
    color: $white;
    cursor: pointer;
    margin: 0 0 0 -1px;
    padding: $small-padding $standard-padding;

    &:hover {
      background: $blue-dark;
      border: 1px solid $blue-dark;
    }
  }
</style>

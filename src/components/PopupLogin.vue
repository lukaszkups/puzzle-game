<template>
  <div>
    <form class="login__form">
      <input-text-field
        :input-name="loginInput"
        :input-class-name="inputClassName"
        :input-error-class-name="inputErrorClassName"
        :input-placeholder="inputPlaceholder"
        :error-message-class-name="errorMessageClassName"
      />
      <button class="login__submit-button">Start</button>
    </form>
  </div>
</template>

<script>
  import InputTextField from './InputTextField';

  export default {
    computed: {
      userName() {
        return this.$store.getters.getUserName;
      },
    },
    data() {
      return {
        errors: {},
        loginInput: 'loginInput',
        inputClassName: 'login__text-input',
        inputErrorClassName: 'login__text-input--has-errors',
        inputPlaceholder: 'Your nickname',
        errorMessageClassName: 'login__form-error',
      };
    },
    methods: {
      submitLoginForm() {

      },
    },
    components: {
      'input-text-field': InputTextField,
    },
  };
</script>

<style lang="scss">
  .login__form {
    display: flex;
    margin: 0;
    padding: $standard-padding 0;
  }

  .login__form-error {
    color: $red;
    display: block;
    font-size: $small-size;
  }

  .login__text-input {
    @include borderRadiuses($standard-border-radius, 0, 0, $standard-border-radius);

    border: 1px solid $gray-light;
    margin: 0;
    padding: $small-padding $standard-padding;
  }

  .login__text-input--has-errors {
    border-color: $red;
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

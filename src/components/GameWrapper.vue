<template>
  <div>
    <div class="game">
      <h1 class="game__heading">
        Puzzle Game
      </h1>
    </div>
    <popup-wrapper
      :window-name="windowName"
      :show-window="showWindow"
      :closeable="false"
    >
      <popup-login></popup-login>
    </popup-wrapper>
  </div>
</template>

<script>
import Popup from './Popup';
import PopupLogin from './PopupLogin';

export default {
  name: 'GameWrapper',
  data() {
    return {
      windowName: 'Logging in',
    };
  },
  computed: {
    showWindow() {
      return this.$store.getters.getLoginPopup;
    },
  },
  components: {
    'popup-wrapper': Popup,
    'popup-login': PopupLogin,
  },
};
</script>

<style lang="scss">
  .game {
    display: block;
    float: none;
    margin: 0 auto;
    width: 780px;
  }

  .game__heading {
    color: $gray-light;
    font-family: $helvetica-font-family;
    font-size: $heading-size;
    margin: $heading-margin 0;
    text-align: center;
    text-transform: uppercase;
  }
</style>

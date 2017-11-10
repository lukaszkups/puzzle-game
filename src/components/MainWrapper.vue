<template>
  <div>
    <div class="game">
      <h1 class="game__heading">
        Puzzle Game
      </h1>
      <game-wrapper />
    </div>
    <popup-wrapper
      v-if="!gameStarted"
      :window-name="windowName"
      :show-window="showWindow"
      :closeable="false"
    >
      <popup-login />
    </popup-wrapper>
  </div>
</template>

<script>
import GameWrapper from './GameWrapper';
import Popup from './Popup';
import PopupLogin from './PopupLoginForm';

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
    gameStarted() {
      return this.$store.getters.getStartTime !== 0;
    },
  },
  components: {
    'game-wrapper': GameWrapper,
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

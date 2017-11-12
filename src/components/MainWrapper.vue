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
      :window-name="loginPopupName"
      :showWindow="showLoginWindow"
      :closeable="false"
    >
      <popup-login />
    </popup-wrapper>
    <popup-wrapper
      v-if="gameFinished"
      :window-name="scorePopupName"
      :showWindow="gameFinished"
      :closeable="false"
    >
      <popup-user-score />
    </popup-wrapper>
  </div>
</template>

<script>
import GameWrapper from './GameWrapper';
import Popup from './Popup';
import PopupLogin from './PopupLoginForm';
import PopupUserScore from './PopupUserScore';


export default {
  name: 'GameWrapper',
  data() {
    return {
      loginPopupName: 'Logging in',
      scorePopupName: 'Your score',
    };
  },
  computed: {
    showLoginWindow() {
      return this.$store.getters.getLoginPopupState;
    },
    gameStarted() {
      return this.$store.getters.getStartTime !== 0;
    },
    gameFinished() {
      return this.gameStarted && this.$store.getters.getEndTime !== 0;
    },
  },
  components: {
    'game-wrapper': GameWrapper,
    'popup-wrapper': Popup,
    'popup-login': PopupLogin,
    'popup-user-score': PopupUserScore,
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

<template>
  <div class="game">
    <h1 class="game__heading">Puzzle Game</h1>

  </div>
</template>

<script>
import PopupWrapper from './PopupWrapper';

export default {
  name: 'GameWrapper',
  data() {
    return {
    };
  },
  components: {
    'popup-wrapper': PopupWrapper,
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
    font-family: Helvetica, sans-serif, Arial;
    font-size: 2em;
    margin: 1em 0;
    text-align: center;
    text-transform: uppercase;
  }
</style>

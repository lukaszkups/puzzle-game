<template>
  <div class="game-wrapper">
    <board-grid />
    <puzzle-grid />
  </div>
</template>

<script>
  import BoardGrid from './BoardGrid';
  import PuzzleGrid from './PuzzleGrid';

  import GameMixin from './../mixins/GameMixin';

  export default {
    mixins: [GameMixin],
    mounted() {
      this.prepareGame();
    },
    components: {
      'board-grid': BoardGrid,
      'puzzle-grid': PuzzleGrid,
    },
  };
</script>

<style lang="scss">
  .game-wrapper {
    display: block;
    float: none;
    margin: 0 auto;
    padding: 0;
  }
</style>

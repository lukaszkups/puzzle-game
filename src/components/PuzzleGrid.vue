<template>
  <ul class="puzzle-grid">
    <puzzle-tile
      v-for="puzz in puzzles"
      :key="puzz.order"
      :order="puzz.order"
    ></puzzle-tile>
  </ul>
</template>

<script>
  import PuzzleTile from './PuzzleTile';

  export default {
    computed: {
      puzzles() {
        return this.$store.getters.getPuzzles;
      },
    },
    components: {
      'puzzle-tile': PuzzleTile,
    },
  };
</script>

<style lang="scss">
  .puzzle-grid {
    background: $gray-light;
    border: 1px solid $gray;
    display: block;
    height: 200px;
    list-style-type: none;
    margin: 50px auto 0 auto;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 396px;
  }
</style>

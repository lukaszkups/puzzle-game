<template>
  <li v-if="tile.inPlace"
    class="board-grid__tile"
    :style="styles"
    :order="order"
  ></li>
  <drop v-else
    :class="tileClasses"
    :style="styles"
    :order="order"
    @dragleave="over = false"
    @dragover="over = true"
    @drop="handleDrop"
  ></drop>
</template>

<script>
  import { Drop } from 'vue-drag-drop';

  export default {
    props: {
      order: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        over: false,
      };
    },
    methods: {
      handleDrop(transferredData) {
        this.over = false;
        if (transferredData.order === this.order) {
          this.addSolvedPuzzle(transferredData);
        }
      },
      removePuzzle(puzzle) {
        return this.$store.dispatch('removePuzzle', puzzle);
      },
      addSolvedPuzzle(data) {
        const helperTile = { ...this.tile };
        helperTile.styles = data.styles;
        helperTile.inPlace = true;
        this.tile = helperTile;
        this.removePuzzle(data.order).then(() => this.tryFinishGame());
      },
      tryFinishGame() {
        if (this.puzzleLeft === 0) {
          const endTime = new Date();
          this.$store.dispatch('markEndTime', endTime);
        }
      },
    },
    computed: {
      tiles() {
        return this.$store.getters.getTiles;
      },
      tile: {
        get() {
          return this.tiles[this.order];
        },
        set(tileToUpdate) {
          this.$store.dispatch('updateTile', tileToUpdate);
        },
      },
      styles() {
        return this.tiles[this.order].styles;
      },
      tileClasses() {
        return {
          'board-grid__tile': true,
          'board-grid__tile--over': this.over,
        };
      },
      puzzles() {
        return this.$store.getters.getPuzzles;
      },
      puzzleLeft() {
        return this.puzzles.length;
      },
    },
    components: {
      Drop,
    },
  };
</script>

<style lang="scss">
  .board-grid__tile {
    border: 1px solid $white;
    display: block;
    float: left;
    height: 130px;
    margin: 0;
    padding: 0;
    width: 130px;

    &.board-grid__tile--over {
      background: $green !important;
    }
  }
</style>

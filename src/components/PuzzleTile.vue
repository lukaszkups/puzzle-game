<template>
  <drag
    class="tile-grid__tile tile-grid__tile--floating"
    :style="styles"
    :transferData="dataToTransfer"
    :order="order"
  ></drag>
</template>

<script>
  import { Drag } from 'vue-drag-drop';

  export default {
    props: {
      order: {
        type: Number,
        default: 0,
      },
    },
    components: {
      Drag,
    },
    computed: {
      puzzles() {
        return this.$store.getters.getPuzzles;
      },
      puzzle() {
        return this.puzzles.filter(obj => obj.order === this.order)[0];
      },
      styles() {
        return this.puzzle.styles;
      },
      dataToTransfer() {
        return {
          styles: this.styles,
          order: this.order,
        };
      },
    },
  };
</script>

<style lang="scss">
  .tile-grid__tile--floating {
    float: none;
    position: absolute;
  }
</style>

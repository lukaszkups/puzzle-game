<template>
  <drag v-show="!dragging"
    class="tile-grid__tile tile-grid__tile--floating"
    :style="styles"
    :transferData="dataToTransfer"
    :order="order"
    @dragstart="dragging = true"
    @dragend="dragging = false"
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
    data() {
      return {
        dragging: false,
        tileClasses: {
          'tile-grid__tile': true,
          'tile-grid__tile--floating': true,
          'tile-grid__tile--invisible': this.dragging,
        },
      };
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

  .tile-grid__tile--invisible {
    visibility: hidden;
  }
</style>

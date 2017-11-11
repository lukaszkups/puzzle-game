<template>
  <drag
    class="tile-grid__tile tile-grid__tile--floating"
    :style="styles"
    :transferData="puzzle.order"
  ></drag>
</template>

<script>
  import { Drag } from 'vue-drag-drop';

  export default {
    props: {
      styles: {
        type: Object,
        default: () => {},
      },
      puzzle: {
        type: Object,
        default: () => {},
      },
    },
    components: {
      Drag,
    },
  };
</script>

<style lang="scss">
  .tile-grid__tile--floating {
    float: none;
    position: absolute;
  }
</style>

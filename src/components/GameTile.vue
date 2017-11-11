<template>
  <li v-if="tile.inPlace"
    class="tile-grid__tile"
    :style="styles"
    :tile="tile"
  ></li>
  <drop v-else
    class="tile-grid__tile"
    :style="styles"
    :tile="tile"
    @dragover="handleDragover(tile.order, ...arguments)"
    @drop="handleDrop"
  ></drop>
</template>

<script>
  import { Drop } from 'vue-drag-drop';

  export default {
    props: {
      styles: {
        type: Object,
        default: () => {},
      },
      tile: {
        type: Object,
        default: () => {},
      },
    },
    methods: {
      handleDragover(order, data, e) {
        console.log(data, order);
        if (order === data.order) {
          e.dataTransfer.dropEffect = 'none';
        }
      },
      handleDrop(data) {
        console.log(data);
      },
    },
    computed: {
      order() {
        return this.tile.order;
      },
    },
    components: {
      Drop,
    },
  };
</script>

<style lang="scss">
  .tile-grid__tile {
    border: 1px solid $white;
    display: block;
    float: left;
    height: 130px;
    margin: 0;
    padding: 0;
    width: 130px;
  }
</style>

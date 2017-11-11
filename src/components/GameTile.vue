<template>
  <li v-if="tile.inPlace"
    class="tile-grid__tile"
    :style="styles"
    :order="order"
  ></li>
  <drop v-else
    class="tile-grid__tile"
    :style="styles"
    :order="order"
    @dragover="handleDragover(tile.order, ...arguments)"
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
    methods: {
      handleDragover() {
        // if (order === data.order) {
        //   e.dataTransfer.dropEffect = 'none';
        // }
      },
      handleDrop(transferredData) {
        if (transferredData.order === this.order) {
          this.addSolvedPuzzle(transferredData);
        }
      },
      addSolvedPuzzle(data) {
        const helperTile = { ...this.tile };
        helperTile.styles = data.styles;
        helperTile.inPlace = true;
        this.tile = helperTile;
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

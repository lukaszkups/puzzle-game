<template>
  <ul class="tile-grid">
    <game-tile
      v-for="tile in tiles"
      :key="tile.order"
      :order="tile.order"
    ></game-tile>
  </ul>
</template>

<script>
  import GameTile from './GameTile';

  export default {
    computed: {
      tiles() {
        return this.$store.getters.getTiles;
      },
    },
    components: {
      'game-tile': GameTile,
    },
  };
</script>

<style lang="scss">
  .tile-grid {
    display: block;
    height: 396px;
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    width: 396px;
  }
</style>

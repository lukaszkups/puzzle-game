<template>
  <ul class="board-grid">
    <board-tile
      v-for="tile in tiles"
      :key="tile.order"
      :order="tile.order"
    />
  </ul>
</template>

<script>
  import BoardTile from './BoardTile';

  export default {
    computed: {
      tiles() {
        return this.$store.getters.getTiles;
      },
    },
    components: {
      'board-tile': BoardTile,
    },
  };
</script>

<style lang="scss">
  .board-grid {
    display: block;
    height: 396px;
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    width: 396px;
  }
</style>

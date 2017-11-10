<template>
  <li
    class="tile-grid__tile"
    :style="style"
    :tile="tile"
  ></li>
</template>

<script>
  export default {
    props: {
      style: Object,
      default: () => {},
    },
    tile: {
      style: Object,
      default: () => {},
    },
    computed: {
      order() {
        return this.tile.order;
      },
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

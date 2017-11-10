<template>
  <ul class="puzzle-grid">
    <li
      v-for="puzz in puzzles"
      :key="puzz.order"
      :style="puzz.styles"
      class="tile-grid__tile tile-grid__tile--floating"
    ></li>
  </ul>
</template>

<script>
  export default {
    props: {
      puzzles: {
        type: Array,
        default: [],
      },
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

  .tile-grid__tile--floating {
    float: none;
    position: absolute;
  }
</style>

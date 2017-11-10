<template>
  <ul>
    <li 
      v-for="tile in tiles"
      :key="tile.order"
      style="tile.style"
    ></li>
  </ul>
</template>

<script>
  export default {
    props: {
      tiles: {
        type: Array,
        default: [],
      },
    },
  };
</script>

<style lang="scss">

</style>

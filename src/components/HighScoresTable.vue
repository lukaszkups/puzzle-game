<template>
  <table class="high-score-table">
    <tr
      v-for="score in highScores"
      :key="score.id"
      class="high-score-table__row"
    >
      <td class="high-score-table__cell">{{ score.user }}</td>
      <td>{{ score.score }}</td>
    </tr>
  </table>
</template>

<script>
  export default {
    computed: {
      highScores() {
        return this.$store.getters.getHighScore;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .high-score-table {
    border: 1px solid $gray-lighter;
    border-collapse: collapse;
    font-size: $default-size;
    margin: $standard-margin auto $heading-margin auto;
    width: 90%;

    .high-score-table__row {
      border: 1px solid $gray-lighter;

      .high-score-table__cell {
        border: 1px solid $gray-lighter;
        padding: $small-padding $standard-padding;
      }
    }
  }
</style>

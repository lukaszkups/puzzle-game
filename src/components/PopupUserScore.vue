<template>
  <div>
    <user-score v-if="userScoreVisibility" />
    <high-scores v-if="!userScoreVisibility" />
  </div>
</template>
<script>
  import UserScore from './UserScore';
  import HighScores from './HighScores';

  export default {
    components: {
      'user-score': UserScore,
      'high-scores': HighScores,
    },
    computed: {
      userScoreVisibility() {
        return this.$store.getters.checkUserScoreVisibility;
      },
    },
  };
</script>

<style lang="scss">

</style>

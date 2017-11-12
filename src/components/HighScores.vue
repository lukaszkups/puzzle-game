<template>
  <div>
    <p class="score-popup__information">
      High scores
    </p>
    <high-scores-table />
    <div class="score-popup__actions">
      <button
        class="score-popup__action-button score-popup__action-button--red-button"
        @click="restartGame"
      >
        Play again
      </button>
    </div>
  </div>
</template>
<script>
  import HighScoresTable from './HighScoresTable';

  import GameMixin from './../mixins/GameMixin';

  export default {
    mixins: [GameMixin],
    computed: {
      username() {
        return this.$store.getters.getUserName;
      },
      score() {
        const startTime = this.$store.getters.getStartTime;
        const endTime = this.$store.getters.getEndTime;
        return endTime - startTime;
      },
    },
    methods: {
      restartGame() {
        this.$store.dispatch('clearTimers');
        this.prepareGame();
        const startTime = new Date();
        this.$store.dispatch('markStartTime', startTime);
      },
    },
    components: {
      'high-scores-table': HighScoresTable,
    },
  };
</script>

<style lang="scss">
  .score-popup__information {
    clear: both;
    font-weight: 300;
    line-height: 1.5em;
    margin-top: 0;

    .score-popup__information--bold-text {
      font-weight: 600;
    }

    .score-popup__information--green-text {
      color: $green;
    }

    .score-popup__information--red-text {
      color: $red;
    }
  }

  .score-popup__actions {
    clear: both;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .score-popup__action-button {
    border-radius: $small-border-radius;
    cursor: pointer;
    flex: 1;
    margin: 0 $standard-margin;
    padding: $small-padding $standard-padding;

    &.score-popup__action-button--green-button,
    &.score-popup__action-button--red-button {
      border: none;
      color: $white;
    }

    &.score-popup__action-button--green-button {
      background-color: $green;
    }

    &.score-popup__action-button--red-button {
      background-color: $red;
    }

    &:hover {
      background-color: $blue-dark;
    }
  }
</style>

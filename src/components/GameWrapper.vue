<template>
  <div class="game-wrapper">
    <game-grid
      :tiles="tiles"
    />
    <puzzle-grid
      :puzzles="puzzles"
    />
  </div>
</template>

<script>
  import GameGrid from './GameGrid';
  import PuzzleGrid from './PuzzleGrid';

  import PuzzleImage from './../assets/image.jpg';

  export default {
    data() {
      return {
        image: null,
        tiles: [],
        puzzles: [],
        tileSize: 130,
      };
    },
    computed: {
      gameStarted() {
        return this.$store.getters.getStartTime;
      },
    },
    methods: {
      prepareGame() {
        const img = new Image();
        img.onload = () => {
          this.generatePuzzleTiles();
          while (this.puzzles.length < 3 || this.puzzles.length > 8) {
            this.shuffleTiles();
          }
        };
        img.src = PuzzleImage;
      },
      generatePuzzleTiles() {
        for (let x = 0; x < 9; x += 1) {
          this.tiles.push({
            order: x,
            styles: {
              background: `url(${PuzzleImage}) no-repeat`,
              backgroundPositionX: `-${(x % 3) * this.tileSize}px`,
              backgroundPositionY: `-${Math.floor(x / 3) * this.tileSize}px`,
              height: `${this.tileSize}px`,
              width: `${this.tileSize}px`,
              visibility: 'visible',
            },
          });
        }
      },
      shuffleTiles() {
        let counter = 1;
        this.tiles = this.tiles.map((tile) => {
          const tileClone = tile;
          const takeTile = Math.random() < 0.5;
          const imageRandomPosX = Math.floor(Math.random() * 350) + 1;
          const imageRandomPosY = Math.floor(Math.random() * 175) + 1;

          if (takeTile) {
            const puzzle = {
              order: tile.order,
              styles: {
                background: `url(${PuzzleImage}) no-repeat`,
                backgroundPositionX: tile.styles.backgroundPositionX,
                backgroundPositionY: tile.styles.backgroundPositionY,
                height: `${this.tileSize}px`,
                left: `${imageRandomPosX}px`,
                top: `${imageRandomPosY}px`,
                width: `${this.tileSize}px`,
                visibility: 'visible',
                zIndex: counter,
              },
            };
            counter += 1;
            this.puzzles.push(puzzle);
            delete tileClone.styles.background;
            delete tileClone.styles.backgroundPositionX;
            delete tileClone.styles.backgroundPositionY;
            tileClone.styles.visibility = 'hidden';
          }
          return tileClone;
        });
      },
    },
    mounted() {
      this.prepareGame();
    },
    components: {
      'game-grid': GameGrid,
      'puzzle-grid': PuzzleGrid,
    },
  };
</script>

<style lang="scss">
  .game-wrapper {
    display: block;
    float: none;
    margin: 0 auto;
    padding: 0;
  }
</style>

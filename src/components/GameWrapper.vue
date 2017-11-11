<template>
  <div class="game-wrapper">
    <game-grid />
    <puzzle-grid />
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
        tileSize: 130,
      };
    },
    computed: {
      gameStarted() {
        return this.$store.getters.getStartTime;
      },
      tiles: {
        get() {
          return this.$store.getters.getTiles || [];
        },
        set(tileSet) {
          this.$store.dispatch('setTiles', tileSet);
        },
      },
      puzzles: {
        get() {
          return this.$store.getters.getPuzzles;
        },
        set(newPuzzle) {
          this.$store.dispatch('pushPuzzle', newPuzzle);
        },
      },
    },
    methods: {
      prepareGame() {
        const img = new Image();
        img.onload = () => {
          this.generatePuzzleTiles();
          this.shuffleTiles();
        };
        img.src = PuzzleImage;
      },
      generatePuzzleTiles() {
        const tiles = [];
        for (let x = 0; x < 9; x += 1) {
          tiles.push({
            inPlace: true,
            order: x,
            styles: {
              background: `url(${PuzzleImage}) no-repeat`,
              backgroundPositionX: `-${(x % 3) * this.tileSize}px`,
              backgroundPositionY: `-${Math.floor(x / 3) * this.tileSize}px`,
              height: `${this.tileSize}px`,
              width: `${this.tileSize}px`,
            },
          });
        }
        this.tiles = tiles;
      },
      shuffleTiles() {
        let counter = 1;
        // Because we need at least one missing tile
        const neccesarryMissingTile = Math.floor(Math.random() * 8) + 0;
        this.tiles = this.tiles.map((tile, index) => {
          const tileClone = tile;
          const takeTile = index === neccesarryMissingTile ? true : Math.random() < 0.5;
          const imageRandomPosX = Math.floor(Math.random() * 350) + 1;
          const imageRandomPosY = Math.floor(Math.random() * 175) + 1;

          if (takeTile) {
            const puzzle = {
              inPlace: true,
              order: tile.order,
              styles: {
                background: `url(${PuzzleImage}) no-repeat`,
                backgroundPositionX: tile.styles.backgroundPositionX,
                backgroundPositionY: tile.styles.backgroundPositionY,
                height: `${this.tileSize}px`,
                left: `${imageRandomPosX}px`,
                top: `${imageRandomPosY}px`,
                width: `${this.tileSize}px`,
                zIndex: counter,
              },
            };
            counter += 1;
            this.puzzles.push(puzzle);
            delete tileClone.styles.backgroundPositionX;
            delete tileClone.styles.backgroundPositionY;
            tileClone.styles.background = '#35495e';
            tileClone.inPlace = false;
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

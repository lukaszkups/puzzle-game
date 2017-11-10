<template>
  <div class="game-wrapper">
    <game-tiles
      :tiles="tiles"
    />
  </div>
</template>

<script>
  import GameTiles from './GameTiles';

  import PuzzleImage from './../assets/image.jpg';
  // 390 in total, 130 per tile

  export default {
    data() {
      return {
        image: null,
        tiles: [],
      };
    },
    methods: {
      getImageData() {
        const img = new Image();
        img.onload = () => {
          this.generatePuzzleTiles();
        };
        img.src = PuzzleImage;
      },
      generatePuzzleTiles() {
        const tileSize = 130;
        for (let x = 0; x < 9; x += 1) {
          this.tiles.push({
            order: x,
            styles: {
              backgroundPositionX: `-${(x % tileSize) * tileSize}px`,
              backgroundPositionY: `-${Math.floor(x / tileSize) * tileSize}px`,
              height: `${tileSize}px`,
              width: `${tileSize}px`,
            },
          });
        }
      },
    },
    components: {
      'game-tiles': GameTiles,
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

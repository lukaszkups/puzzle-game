<template>
  <div class="popup">
    <div class="popup__window">
      <div class="popup__title-bar">
      </div>
      <div class="popup__content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style lang="scss">
  .popup {
    background: rgba(0,0,0,0.25);
    bottom: 0;
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    z-index: $popup-z-index;
  }
</style>
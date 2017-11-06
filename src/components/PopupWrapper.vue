<template>
  <div class="popup">
    <div class="popup__window">
      <div class="popup__title-bar">
        <h2 class="popup__window-name">{{ windowName }}</h2>
        <span class="popup__close-icon"></span>
      </div>
      <div class="popup__content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      windowName: {
        type: String,
        default: 'Default window',
      },
    },
    data() {
      return {
        windowName: this.props.windowName,
      };
    },
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

  .popup__window {
    border-radius: $window-border-radius;
    background: $white;
    padding: 0 $standard-padding $standard-padding;
  }
</style>
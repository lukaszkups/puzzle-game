<template>
  <div
    class="popup"
    v-if="popupVisibility">
    <div class="popup__window">
      <div class="popup__title-bar">
        <h2 class="popup__window-name">{{ windowName }}</h2>
        <span
          class="popup__close-icon"
          @click="closePopup"
          v-if="closeable"
        >
          x
        </span>
      </div>
      <div class="popup__content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: {
      windowName: {
        type: String,
        default: 'Default window',
      },
      closeable: {
        type: Boolean,
        default: true,
      },
    },
    computed: {
      popupVisibility() {
        return this.$store.getters.getPopupState;
      },
    },
    methods: {
      ...mapActions({
        closePopup: 'hidePopup',
      }),
    },
  };
</script>

<style lang="scss">
  .popup {
    align-items: center;
    background: rgba(0,0,0,0.25);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    z-index: $popup-z-index;
  }

  .popup__window {
    background: $white;
    border-radius: $small-border-radius;
    box-shadow: $standard-shadow;
    min-width: 250px;
    padding: 0;
  }

  .popup__title-bar {
    border-bottom: 1px solid $gray-lighter;
    display: block;
    padding: $standard-padding;
  }

  .popup__window-name {
    display: inline;
    font-family: $helvetica-font-family;
    font-size: $default-size;
    font-weight: $default-weight;
    line-height: 1em;
    margin: 0;
  }

  .popup__close-icon {
    background: $white;
    color: $gray-light;
    cursor: pointer;
    display: inline;
    font-family: $helvetica-font-family;
    float: right;
  }

  .popup__content-wrapper {
    min-height: 50px;
    padding: $standard-padding;
  }
</style>
<template>
  <div class="nav-sp-icon__wrap">
    <div
      class="nav-sp-icon"
      @touchstart="switchState()"
      :class="{ 'nav-sp-icon--is-open': $store.state.isOpenModal }"
    >
      <div class="nav-sp-icon__bar">
        <div class="nav-sp-icon__bar--first"></div>
        <div class="nav-sp-icon__bar--second"></div>
        <div class="nav-sp-icon__bar--third"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    switchState() {
      this.$store.commit('switchModalState');
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-sp-icon__wrap {
  position: fixed;
  right: $margin-side;
  bottom: $height-sc-panel + 10px;
  z-index: 30;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav-sp-icon {
  z-index: 30;
  width: 0;
  height: 0;
  border-top: 34px solid transparent;
  border-right: 60px solid $color-magenta;
  border-bottom: 34px solid transparent;
  transition: all 0.1s;
  position: relative;

  @include device-pc {
    display: none;
  }
}

.nav-sp-icon__bar {
  position: absolute;
  top: -10px;
  left: 24px;
  width: 27px;
  height: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.nav-sp-icon__bar--first,
.nav-sp-icon__bar--second,
.nav-sp-icon__bar--third {
  height: 1px;
  background-color: white;
  z-index: 30;
}

.nav-sp-icon__bar--first,
.nav-sp-icon__bar--third {
  width: 70%;
}

.nav-sp-icon__bar--second {
  width: 100%;
}

.nav-sp-icon--is-open {
  transform: rotate(180deg);
  .nav-sp-icon__bar {
    display: none;
  }
}
</style>

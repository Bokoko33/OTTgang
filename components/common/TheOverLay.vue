<template>
  <div class="overlay" @click="switchState()"></div>
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
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: transparent;
}
</style>

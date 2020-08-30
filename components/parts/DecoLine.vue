<template>
  <div class="decoration-line"></div>
</template>

<style lang="scss" scoped>
.decoration-line {
  display: block;
  width: 36px;
  height: 2px;
  margin-bottom: 12px;
  background-color: $color-magenta;
  @include device-pc {
    margin-bottom: 30px;
  }
}
</style>

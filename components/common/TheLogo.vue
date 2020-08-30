<template>
  <div class="logo" :class="{ 'logo--visible': $store.state.isShowLogo }">
    <a href="/" class="logo--wrap" id="js-logo">
      <img class="logo--img" src="~/assets/images/ott_logo.png" alt="OTTgang" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  position: fixed;
  width: 90px;
  top: 20px;
  left: $margin-side;
  z-index: 10;

  transform: translateY(-100px);
  transition: all 0.1s;
}

.logo--wrap {
  width: 100%;
}

.logo--img {
  width: 100%;
  height: auto;
}

.logo--visible {
  transform: translateY(0);
}
</style>

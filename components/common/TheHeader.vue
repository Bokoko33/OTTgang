<template>
  <header class="header">
    <ul class="header__nav">
      <li class="header__nav__item">
        <a class="header__nav__link" href="/#">Top</a>
      </li>
      <li class="header__nav__item">
        <a class="header__nav__link" href="/#works">Works</a>
      </li>
      <li class="header__nav__item">
        <a class="header__nav__link" href="/#member">Member</a>
      </li>
      <li class="header__nav__item">
        <a class="header__nav__link" href="/#comments">Comments</a>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: none;
  @include device-pc {
    width: 50%;
    height: $height-g-header;
    padding: 0 $margin-side;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 30;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.header__nav {
  display: flex;
  justify-content: flex-end;
}

.header__nav__item {
  margin-left: 12%;
  font-size: 18px;
  font-weight: 700;
}
</style>

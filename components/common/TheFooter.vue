<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__links">
        <a
          class="footer__links__icon"
          href="https://www.youtube.com/channel/UCLXPDkT37WzhECyrk60_p8w/featured"
        >
          <img
            class="footer__links__icon--img"
            src="~/assets/images/svg/icon_youtube.svg"
            alt
          />
        </a>
        <a class="footer__links__icon" href="https://soundcloud.com/gang-ott">
          <img
            class="footer__links__icon--img"
            src="~/assets/images/svg/icon_soundcloud.svg"
            alt
          />
        </a>
        <a class="footer__links__home" href="https://geikou-takuten.com/"
          >卓展本サイトへ戻る</a
        >
      </div>
      <p class="footer__copyright">&copy;2020 卓展 OTTgang</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: $height-g-footer;
  padding: 0 $margin-side $height-sc-panel;
  background-color: $color-black;
}

.footer__content {
  width: 100%;
  border-top: solid 1px white;
  display: flex;
  flex-direction: column;
}

.footer__links {
  width: 50%;
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  @include device-pc {
    width: 20%;
  }
}

.footer__links__icon {
  display: block;
  margin: 0 20% 20px 0;
  width: 10vw;
  min-width: 24px;
  max-width: 50px;
  @include device-pc {
    width: 40px;
    margin-right: 15%;
  }
}

.footer__links__icon--img {
  width: 100%;
  height: auto;
}

.footer__links__home {
  display: inline;
  font-size: 14px;
}

.footer__copyright {
  font-size: 12px;
  text-align: center;
}
</style>

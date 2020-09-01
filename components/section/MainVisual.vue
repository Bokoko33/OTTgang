<template>
  <div class="main-visual">
    <figure class="main-visual__movie--wrap">
      <video
        class="main-visual__movie"
        src="~/assets/movies/main.mp4"
        width="1280"
        height="720"
        autoplay
        muted
        loop
        playsinline
      ></video>
    </figure>
    <h1 class="main-visual__logo" id="js-main-visual-logo">
      <img class="main-visual__logo__img" src="~/assets/images/ott_logo.png" alt="OTTgang" />
    </h1>
    <div class="main-visual__side-text--left">
      <img src="~/assets/images/svg/sidetext.svg" alt="OTTgang" />
    </div>
    <div class="main-visual__side-text--right">
      <img src="~/assets/images/svg/sidetext.svg" alt="OTTgang" />
    </div>
    <p class="main-visual__catch-copy">
      we’re a gang :
      <br />design genre
      <br />-less music.
    </p>
    <div class="main-visual__scroll">scroll</div>
  </div>
</template>

<script>
export default {
  mounted() {
    const options = {
      root: null, // 今回はビューポートをルート要素とする
      rootMargin: '0px', // ビューポートの中心を判定基準にする
      threshold: 0, // 閾値は0
    };
    const mainVisualLogo = document.getElementById('js-main-visual-logo');
    /// 初期化
    const observer = new IntersectionObserver(this.callback, options);
    observer.observe(mainVisualLogo);
  },
  methods: {
    callback(entries) {
      for (let i = 0; i < entries.length; i++) {
        if (!entries[i].isIntersecting) {
          this.$store.commit('showLogo');
        } else {
          this.$store.commit('hideLogo');
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-visual {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.main-visual__movie--wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  @include device-pc {
    width: 90%;
    max-width: 1600px;
    right: 0;
    margin: 0 auto;
    overflow: hidden;
  }
}

.main-visual__movie {
  height: 100%;
  transform: translateX(-25%) scale(1.2);
  @include device-pc {
    width: 100%;
    transform: translateX(0) scale(1.4);
  }
}

.main-visual__logo {
  width: 200px;
  position: absolute;
  left: 5%;
  top: 15px;
  @include device-pc {
    width: 300px;
    left: 1%;
  }
}

.main-visual__logo__img {
  width: 100%;
  height: auto;
}

.main-visual__side-text--left,
.main-visual__side-text--right {
  width: 20%;
  max-width: 90px;
  position: absolute;
}

.main-visual__side-text--left {
  left: -27px;
  bottom: 120px;
  @include device-pc {
    top: 340px;
  }
}

.main-visual__side-text--right {
  right: -15px;
  bottom: $height-sc-panel + 300px;
  @include device-pc {
    top: 20px;
  }
}

.main-visual__catch-copy {
  position: absolute;
  font-size: 28px;
  letter-spacing: 0.04em;
  font-weight: 700;
  text-align: right;
  bottom: $height-sc-panel + 100px;
  right: $margin-side;
  @include device-pc {
    font-size: 42px;
    bottom: 4vh;
    letter-spacing: 0.08em;
    line-height: 1.1;
  }
}

.main-visual__scroll {
  position: absolute;
  left: $margin-side;
  bottom: 15px;
  writing-mode: vertical-lr;
  font-size: 12px;
  font-weight: 700;
  @include device-pc {
    font-size: 16px;
    left: 0;
    right: 0;
    bottom: 13.8vh;
    text-align: center;
    writing-mode: horizontal-tb;
  }
  &::before {
    content: '';
    width: 1px;
    height: 80px;
    display: block;
    background-color: white;

    animation: scr 2s cubic-bezier(1, 0, 0, 1) infinite;

    @include device-pc {
      position: absolute;
      height: 60px;
      left: 0;
      right: 0;
      top: 40px;
      margin: 0 auto;
    }
  }
}

@keyframes scr {
  0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  35% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  35.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  70%,
  100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
}
</style>

<template>
  <div class="sc-panel" :class="{ 'panel--visible': $store.state.isShowLogo }">
    <div class="sc-panel__content">
      <div class="sc-panel__song">
        <div
          class="sc-panel__artwork"
          :style="{ backgroundImage: 'url(' + artwork + ')' }"
        ></div>
        <p class="sc-panel__title">{{ title }}</p>
      </div>
      <div
        class="sc-panel__button"
        @touchstart="handleButton()"
        :class="{ playing: playing, pausing: !playing }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playing: false, //再生中かどうか
      sc_widget: [], //widgetのリスト
      nowPlay: -1, //現在のwidgetのindex
      title: '再生停止中',
      artwork: '',
    };
  },
  mounted() {
    const sc_elemtnts = document.getElementsByClassName('sc-widget');
    for (let i = 0; i < sc_elemtnts.length; i++) {
      this.sc_widget[i] = SC.Widget(sc_elemtnts[i]);
      this.sc_widget[i].bind(SC.Widget.Events.PLAY, this.scPlay.bind(null, i));
      this.sc_widget[i].bind(
        SC.Widget.Events.PAUSE,
        this.scPause.bind(null, i)
      );
    }
    console.log(this.sc_widget);
  },
  methods: {
    handleButton() {
      if (this.playing) {
        this.sc_widget[this.nowPlay].pause();
      } else {
        if (this.nowPlay == -1) {
          //nowPlayがない時は先頭を再生
          this.sc_widget[0].play();
        } else {
          this.sc_widget[this.nowPlay].play();
        }
      }
    },
    scPlay(i) {
      console.log('play!');
      this.playing = true;
      this.nowPlay = i;

      let vm = this; //コールバック内ではthisがvueコンポーネントを参照してくれない

      this.sc_widget[this.nowPlay].getCurrentSound(function (s) {
        vm.title = s.title;
        vm.artwork = s.artwork_url;
      });
    },
    scPause(i) {
      if (i === this.nowPlay) {
        this.playing = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sc-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: $height-sc-panel;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0 5%;
  z-index: 10;
  background: linear-gradient(
    to right,
    $color-magenta,
    $color-purple,
    $color-blue
  );
  transform: translateY($height-sc-panel);
  transition: all 0.2s;
}

.sc-panel__content {
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.panel--visible {
  transform: translateY(0);
}

.sc-panel__song {
  display: flex;
  align-items: center;
}

.sc-panel__artwork {
  width: $height-sc-panel * 0.8;
  height: $height-sc-panel * 0.8;
  min-width: $height-sc-panel * 0.8;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 20px;
}

.sc-panel__button {
  position: relative;
  width: $height-sc-panel * 0.7;
  height: $height-sc-panel * 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sc-panel__button.pausing {
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 0;
    height: 0;
    border-top: $height-sc-panel * 0.7 * 0.3 solid transparent;
    border-left: $height-sc-panel * 0.3 solid white;
    border-bottom: $height-sc-panel * 0.7 * 0.3 solid transparent;
  }
}

.sc-panel__button.playing {
  &::before,
  &::after {
    content: '';
    width: 6px;
    height: 60%;
    background-color: white;
    margin: 0 3px;
  }
}
</style>

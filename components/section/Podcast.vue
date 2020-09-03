<template>
  <section class="podcast">
    <div class="podcast__heading">
      <h2 class="heading">Podcast</h2>
    </div>
    <div class="podcast__describe">
      <DecoLine />
      <p
        class="podcast__describe__text"
      >OTTgang卓長のボマイェが、OTTgangのコンセプトや作品についてトークするラジオアーカイブ！ぜひ覗いてみてください！</p>
    </div>
    <div class="podcast__link__wrap">
      <iframe
        class="podcast__link"
        src="https://anchor.fm/takuten-2020/embed/episodes/01-OTT-gang-ej2g55/a-a344flh"
        height="102"
        width="400"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </section>
</template>

<script>
import DecoLine from '~/components/parts/DecoLine';
export default {
  components: {
    DecoLine,
  },
};
</script>

<style lang="scss" scoped>
.podcast__describe {
  margin-top: 40px;
}

.podcast__describe__text {
  font-size: 14px;
}

.podcast__link__wrap {
  width: 100%;
  height: 102px;
  margin-top: 20px;
  @include device-pc {
    height: 162px;
  }
}

.podcast__link {
  width: 100%;
  height: 100%;
}
</style>

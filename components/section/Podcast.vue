<template>
  <section class="podcast">
    <div class="podcast__heading">
      <h2 class="heading">Podcast</h2>
    </div>
    <div class="podcast__describe">
      <DecoLine />
      <p class="podcast__describe__text">
        OTTgang卓長のボマイェが、OTTgangのコンセプトや作品についてトークするラジオアーカイブ！ぜひ覗いてみてください！
      </p>
    </div>
    <div class="podcast__link">埋め込み</div>
  </section>
</template>

<script>
import DecoLine from '~/components/parts/DecoLine'
export default {
  components: {
    DecoLine,
  },
}
</script>

<style lang="scss" scoped>
.podcast__describe {
  margin-top: 40px;
}

.podcast__describe__text {
  font-size: 14px;
}

.podcast__link {
  width: 100%;
  height: 20vw;
  margin-top: 20px;
  border: solid 1px white;
}
</style>

<template>
  <div class="page-soundscape">
    <WorkDetails
      :iconSrc="'icon_shakadeesu.jpg'"
      :movieSrc="'https://www.youtube.com/embed/7eZIbmq5Jiw'"
      :soundCloudSrc="'517123572'"
      :prevImageSrc="'artwork_himmel.jpg'"
      :nextImageSrc="'artwork_closing-for-the-day.jpg'"
      :prevLink="'/himmel'"
      :nextLink="'/closing-for-the-day'"
    >
      <template v-slot:title>
        SoundScape <br class="br__sp-only" />
        <span class="featuring-text"> feat.カゼヒキ </span>
      </template>
      <template v-slot:composer> シャカデェス </template>
      <template v-slot:caption>
        この作品は処女作として、電子音の練習と自己紹介がてらに僕が綺麗だなって感じるものを詰め込みました。綺麗な景色とかを見てただ綺麗だなって思うような感覚を感じてもらえると嬉しいです。
      </template>
    </WorkDetails>
  </div>
</template>

<script>
import WorkDetails from '~/components/section/WorkDetails';

export default {
  components: {
    WorkDetails,
  },
};
</script>

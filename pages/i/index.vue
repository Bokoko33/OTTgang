<template>
  <div class="page-i">
    <WorkDetails
      :iconSrc="'icon_sawasick.jpg'"
      :movieSrc="'https://www.youtube.com/embed/7eZIbmq5Jiw'"
      :soundCloudSrc="'884879545'"
      :prevImageSrc="'artwork_silent-morning.jpg'"
      :nextImageSrc="'artwork_yoake.jpg'"
      :prevLink="'/silent-morning'"
      :nextLink="'/yoake'"
    >
      <template v-slot:title>i</template>
      <template v-slot:composer>sawasick</template>
      <template v-slot:caption>
        大好きなアップリフティングトランスをミクさんに歌ってもらいました。<br />
        今の自分全てを落とし込んだ曲です。
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

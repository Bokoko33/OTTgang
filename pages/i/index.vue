<template>
  <div class="page-i">
    <WorkDetails
      :iconSrc="'icon_sawasick.jpg'"
      :movieSrc="'https://www.youtube.com/embed/7eZIbmq5Jiw'"
      :soundCloudSrc="'548617305'"
      :prevImageSrc="'artwork_foaming.jpg'"
      :nextImageSrc="'artwork_yoake.jpg'"
      :prevLink="'/foaming'"
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

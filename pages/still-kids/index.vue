<template>
  <div class="page-i">
    <WorkDetails
      :iconSrc="'icon_bomaye.jpg'"
      :movieSrc="'https://www.youtube.com/embed/7eZIbmq5Jiw'"
      :soundCloudSrc="'548617305'"
      :prevImageSrc="'artwork_rapid-fire.jpg'"
      :nextImageSrc="'artwork_foaming.jpg'"
      :prevLink="'/rapid-fire'"
      :nextLink="'/foaming'"
    >
      <template v-slot:title>Still Kids</template>
      <template v-slot:composer>Bomaye</template>
      <template v-slot:caption>
        ジャンルはFuture
        Bassです。自分の好きな展開を詰め込んだインスト曲になってます。
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

<template>
  <div class="page-himmel">
    <WorkDetails
      :iconSrc="'icon_mona.jpg'"
      :movieSrc="'https://www.youtube.com/embed/MiP_d9dCu9c'"
      :soundCloudSrc="'884872567'"
      :prevImageSrc="'artwork_still-kids.jpg'"
      :nextImageSrc="'artwork_SoundScape.jpg'"
      :prevLink="'/still-kids'"
      :nextLink="'/soundscape'"
    >
      <template v-slot:title>himmel</template>
      <template v-slot:composer>mone</template>
      <template v-slot:caption>リズミカルに並ぶ雲、美しい色の変化、キラキラの星空など、様々な表情を見せてくれる空をイメージした曲です。</template>
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

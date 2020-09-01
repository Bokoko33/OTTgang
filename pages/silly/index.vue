<template>
  <div class="page-silly">
    <WorkDetails
      :iconSrc="'icon_meiji.jpg'"
      :movieSrc="'https://www.youtube.com/embed/fevsxG9kMIo'"
      :soundCloudSrc="'884878906'"
      :prevImageSrc="'artwork_memento.jpg'"
      :nextImageSrc="'artwork_himmel.jpg'"
      :prevLink="'/memento'"
      :nextLink="'/himmel'"
    >
      <template v-slot:title>Silly</template>
      <template v-slot:composer>明治</template>
      <template v-slot:caption>なるべく聞きやすく飽きのこない展開を心がけて作ったので、寝る前や朝起きてから聞いて頂けると光栄です。</template>
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

<template>
  <div class="page-foaming">
    <WorkDetails
      :iconSrc="'icon_nekami.jpg'"
      :movieSrc="'https://www.youtube.com/embed/7eZIbmq5Jiw'"
      :soundCloudSrc="'669062363'"
      :prevImageSrc="'artwork_still-kids.jpg'"
      :nextImageSrc="'artwork_RevivingArmor.jpg'"
      :prevLink="'/still-kids'"
      :nextLink="'/reviving-armor'"
    >
      <template v-slot:title>foaming</template>
      <template v-slot:composer>nekami</template>
      <template v-slot:caption>初めてFuture Bassに挑戦してみました。</template>
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

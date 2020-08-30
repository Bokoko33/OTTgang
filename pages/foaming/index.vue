<template>
  <div class="page-foaming">
    <WorkDetails
      :iconSrc="'icon_nekami.jpg'"
      :movieSrc="'https://www.youtube.com/embed/7eZIbmq5Jiw'"
      :soundCloudSrc="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/669062363&color=%23b92c92&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=false'"
      :prevImageSrc="'artwork_foaming.jpg'"
      :nextImageSrc="'artwork_foaming.jpg'"
      :prevLink="'/foaming'"
      :nextLink="'/foaming'"
    >
      <template v-slot:title>foaming</template>
      <template v-slot:composer>nekami</template>
      <template v-slot:caption>初めてFuture Bassに挑戦してみました。</template>
    </WorkDetails>
  </div>
</template>

<script>
import WorkDetails from '~/components/section/WorkDetails'

export default {
  components: {
    WorkDetails,
  },
}
</script>

<template>
  <div class="page-reviving-armor">
    <WorkDetails
      :iconSrc="'icon_nekami.jpg'"
      :movieSrc="'https://www.youtube.com/embed/7eZIbmq5Jiw'"
      :soundCloudSrc="'884882260'"
      :prevImageSrc="'artwork_foaming.jpg'"
      :nextImageSrc="'artwork_silent-morning.jpg'"
      :prevLink="'/foaming'"
      :nextLink="'/silent-morning'"
    >
      <template v-slot:title>Reviving Armor</template>
      <template v-slot:composer>nekami</template>
      <template v-slot:caption>
        人気劇伴作曲家の澤野弘之さんに憧れて作りました。
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

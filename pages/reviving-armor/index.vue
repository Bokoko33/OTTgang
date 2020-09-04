<template>
  <div class="page-reviving-armor">
    <WorkDetails
      :iconSrc="'icon_nekami.jpg'"
      :movieSrc="'https://www.youtube.com/embed/y6EfRADPbX8'"
      :soundCloudSrc="'884882260'"
      :prevImageSrc="''"
      :nextImageSrc="'artwork_still-kids.jpg'"
      :prevLink="''"
      :nextLink="'/still-kids'"
    >
      <template v-slot:title>Reviving Armor</template>
      <template v-slot:composer>nekami</template>
      <template v-slot:caption>人気劇伴作曲家の澤野弘之さんに憧れて作りました。</template>
    </WorkDetails>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Reviving Armor',
    };
  },
};
</script>
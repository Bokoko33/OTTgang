<template>
  <div class="page-silent-morning">
    <WorkDetails
      :iconSrc="'icon_none.jpg'"
      :movieSrc="'https://www.youtube.com/embed/7eZIbmq5Jiw'"
      :soundCloudSrc="'608325246'"
      :prevImageSrc="'artwork_RevivingArmor.jpg'"
      :nextImageSrc="'artwork_i.jpg'"
      :prevLink="'/reviving-armor'"
      :nextLink="'/i'"
    >
      <template v-slot:title>Silent Morning</template>
      <template v-slot:composer>pige</template>
      <template v-slot:caption>
        Hiphopを作りました。徹夜して迎えた朝をイメージして作りました。
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

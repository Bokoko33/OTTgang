<template>
  <div class="page-yoake">
    <WorkDetails
      :iconSrc="'icon_sharp.jpg'"
      :movieSrc="'https://www.youtube.com/embed/7eZIbmq5Jiw'"
      :soundCloudSrc="'313089325'"
      :prevImageSrc="'artwork_i.jpg'"
      :nextImageSrc="'artwork_memento.jpg'"
      :prevLink="'/i'"
      :nextLink="'/memento'"
    >
      <template v-slot:title>夜明け</template>
      <template v-slot:composer>シャープ</template>
      <template v-slot:caption>
        暗い空に日の光が差し込むイメージの曲です。成り行きで暗い感じの曲になってしまいましたが、盛り上がりを楽しんで貰えたら嬉しいです。
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

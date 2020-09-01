<template>
  <div class="page-eternally">
    <WorkDetails
      :iconSrc="'icon_cornbutter.jpg'"
      :movieSrc="''"
      :soundCloudSrc="'884876980'"
      :prevImageSrc="'artwork_mid.jpg'"
      :nextImageSrc="''"
      :prevLink="'/mid'"
      :nextLink="''"
    >
      <template v-slot:title>Eternally</template>
      <template v-slot:composer>コーンバター</template>
      <template v-slot:caption>劇伴音楽をイメージしたピアノインスト曲です。ピアノの音色を中心に綺麗にまとめることを心がけました。</template>
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

<template>
  <div class="page-mid">
    <WorkDetails
      :iconSrc="'icon_pepper.jpg'"
      :movieSrc="''"
      :soundCloudSrc="'884876110'"
      :prevImageSrc="'artwork_closing-for-the-day.jpg'"
      :nextImageSrc="'artwork_eternally.jpg'"
      :prevLink="'/closing-for-the-day'"
      :nextLink="'/eternally'"
    >
      <template v-slot:title>mid</template>
      <template v-slot:composer>pepper</template>
      <template v-slot:caption>真夜中の暗くてちょっと寂しい感じをイメージして作りました。途中のボーカルのループで楽しさも入れてみました。</template>
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

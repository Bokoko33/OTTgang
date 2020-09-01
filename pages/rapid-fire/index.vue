<template>
  <div class="page-i">
    <WorkDetails
      :iconSrc="'icon_bomaye.jpg'"
      :movieSrc="'https://www.youtube.com/embed/dq86RRpsZSk'"
      :soundCloudSrc="'884960956'"
      :prevImageSrc="'artwork_foaming.jpg'"
      :nextImageSrc="'artwork_silent-morning.jpg'"
      :prevLink="'foaming'"
      :nextLink="'/silent-morning'"
    >
      <template v-slot:title>RAPID FIRE</template>
      <template v-slot:composer>Bomaye</template>
      <template v-slot:caption>
        Happy
        Hardcoreです。ドロップ（サビ）のシンセリードの音を作り、「これはいける！」と思い、その勢いで作りました。
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

<template>
  <div class="page-closing_for_the_day">
    <WorkDetails
      :iconSrc="'icon_noboru.jpg'"
      :movieSrc="'https://www.youtube.com/embed/VityjDLhqXU'"
      :soundCloudSrc="'884875474'"
      :prevImageSrc="'artwork_SoundScape.jpg'"
      :nextImageSrc="'artwork_mid.jpg'"
      :prevLink="'/soundscape'"
      :nextLink="'/mid'"
    >
      <template v-slot:title>Closing for the day</template>
      <template v-slot:composer>大人の階段ノボル</template>
      <template v-slot:caption>テーマパークの閉園時に名残惜しさと楽しい余韻を抱いて帰るゲストを見送るアナウンスをイメージした１曲です。</template>
    </WorkDetails>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Closing for the day',
    };
  },
};
</script>
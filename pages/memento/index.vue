<template>
  <div class="page-memento">
    <WorkDetails
      :iconSrc="'icon_veni.jpg'"
      :movieSrc="'https://www.youtube.com/embed/4vCQgwNHSJI'"
      :soundCloudSrc="'884878213'"
      :prevImageSrc="'artwork_eternally.jpg'"
      :nextImageSrc="'artwork_silly.jpg'"
      :prevLink="'/eternally'"
      :nextLink="'/silly'"
    >
      <template v-slot:title>memento.</template>
      <template v-slot:composer>veni</template>
      <template v-slot:caption>
        昔作ったベースフレーズを発掘したので、それに更に｢あ、これ好き！｣を詰めました。
        <br />なんだかんだ初めてのきちんとした音楽作品、たくさんの方々に支えられての完成です。感謝。
      </template>
    </WorkDetails>
  </div>
</template>

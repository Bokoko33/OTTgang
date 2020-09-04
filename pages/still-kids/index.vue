<template>
  <div class="page-i">
    <WorkDetails
      :iconSrc="'icon_bomaye.jpg'"
      :movieSrc="'https://www.youtube.com/embed/kxEMkszIJIg'"
      :soundCloudSrc="'885263941'"
      :prevImageSrc="'artwork_RevivingArmor.jpg'"
      :nextImageSrc="'artwork_himmel.jpg'"
      :prevLink="'/reviving-armor'"
      :nextLink="'/himmel'"
    >
      <template v-slot:title>Still Kids</template>
      <template v-slot:composer>Bomaye</template>
      <template v-slot:caption>
        ジャンルはFuture
        Bassです。自分の好きな展開を詰め込んだインスト曲になってます。
      </template>
    </WorkDetails>
  </div>
</template>

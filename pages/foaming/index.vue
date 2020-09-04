<template>
  <div class="page-foaming">
    <WorkDetails
      :iconSrc="'icon_nekami.jpg'"
      :movieSrc="'https://www.youtube.com/embed/CVF1WUP4GZ0'"
      :soundCloudSrc="'884881756'"
      :prevImageSrc="'artwork_yoake.jpg'"
      :nextImageSrc="'artwork_rapid-fire.jpg'"
      :prevLink="'/yoake'"
      :nextLink="'/rapid-fire'"
    >
      <template v-slot:title>foaming</template>
      <template v-slot:composer>nekami</template>
      <template v-slot:caption>初めてFuture Bassに挑戦してみました。</template>
    </WorkDetails>
  </div>
</template>

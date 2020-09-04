<template>
  <div class="page-silent-morning">
    <WorkDetails
      :iconSrc="'icon_none.jpg'"
      :movieSrc="'https://www.youtube.com/embed/Pj4cuEJ7_zM'"
      :soundCloudSrc="'884884753'"
      :prevImageSrc="'artwork_rapid-fire.jpg'"
      :nextImageSrc="''"
      :prevLink="'/rapid-fire'"
      :nextLink="''"
    >
      <template v-slot:title>Silent Morning</template>
      <template v-slot:composer>pige</template>
      <template v-slot:caption>Hiphopを作りました。徹夜して迎えた朝をイメージして作りました。</template>
    </WorkDetails>
  </div>
</template>

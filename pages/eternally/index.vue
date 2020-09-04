<template>
  <div class="page-eternally">
    <WorkDetails
      :iconSrc="'icon_cornbutter.jpg'"
      :movieSrc="'https://www.youtube.com/embed/Ae8J7MoafrY'"
      :soundCloudSrc="'884876980'"
      :prevImageSrc="'artwork_mid.jpg'"
      :nextImageSrc="'artwork_memento.jpg'"
      :prevLink="'/mid'"
      :nextLink="'memento'"
    >
      <template v-slot:title>Eternally</template>
      <template v-slot:composer>コーンバター</template>
      <template v-slot:caption>劇伴音楽をイメージしたピアノインスト曲です。ピアノの音色を中心に綺麗にまとめることを心がけました。</template>
    </WorkDetails>
  </div>
</template>

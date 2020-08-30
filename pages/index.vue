<template>
  <div class="page-index">
    <MainVisual />
    <div class="content">
      <Introduction />
      <Works />
      <Member />
      <Podcast />
      <Comments />
    </div>
  </div>
</template>

<script>
import MainVisual from '~/components/section/MainVisual'
import Introduction from '~/components/section/Introduction'
import Works from '~/components/section/Works'
import Member from '~/components/section/Member'
import Podcast from '~/components/section/Podcast'
import Comments from '~/components/section/Comments'

export default {
  components: {
    MainVisual,
    Introduction,
    Works,
    Member,
    Podcast,
    Comments,
  },
}
</script>

<style lang="scss" scoped></style>

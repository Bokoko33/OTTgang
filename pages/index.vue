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
export default {
  head() {
    return {
      title: 'OTTgang',
      titleTemplate: '',
    };
  },
};
</script>
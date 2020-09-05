<template>
  <div>
    <TheLogo />
    <TheHeader />
    <TheOverLay v-if="$store.state.isOpenModal" />
    <Nuxt />
    <TheNavIcon />
    <TheNavWindow />
    <TheScPanel />
    <TheFooter />
  </div>
</template>

// <script>
// import TheSCPanel from '~/components/common/TheSCPanel';
// export default {
//   components: {
//     TheSCPanel,
//   },
// };
//
</script>
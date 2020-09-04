<template>
  <div>
    <TheLogo />
    <TheHeader />
    <TheOverLay v-if="$store.state.isOpenModal" />
    <Nuxt />
    <TheNavIcon />
    <TheNavWindow />
    <!-- <TheSCPanel /> -->
    <TheFooter />
  </div>
</template>
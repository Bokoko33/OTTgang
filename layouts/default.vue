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

<script>
import TheHeader from '~/components/common/TheHeader';
import TheFooter from '~/components/common/TheFooter';
import TheLogo from '~/components/common/TheLogo';
import TheOverLay from '~/components/common/TheOverLay';
import TheNavIcon from '~/components/common/TheNavIcon';
import TheNavWindow from '~/components/common/TheNavWindow';
// import TheSCPanel from '~/components/common/TheSCPanel';

export default {
  components: {
    TheHeader,
    TheFooter,
    TheLogo,
    TheOverLay,
    TheNavIcon,
    TheNavWindow,
    // TheSCPanel,
  },
  methods: {
    switchModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

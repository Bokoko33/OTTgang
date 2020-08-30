<template>
  <div
    class="nav-sp-window"
    :class="{ 'nav-sp-window--is-open': $store.state.isOpenModal }"
  >
    <div class="nav-sp-window__title">
      <p class="heading">Menu</p>
    </div>
    <ul class="nav-sp-window__list">
      <li
        class="nav-sp-window__list__item"
        v-for="(item, index) in menuItems"
        :key="index"
      >
        <nuxt-link
          @click.native="switchState()"
          :to="item.link"
          class="nav-sp-window__list__link"
        >
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: 'Top', link: '/' },
        { name: 'Works', link: '/#works' },
        { name: 'Member', link: '/#member' },
        { name: 'Comments', link: '/#comments' },
      ],
    };
  },
  methods: {
    switchState() {
      this.$store.commit('switchModalState');
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-sp-window {
  transform: translateX(100vw);

  width: 85vw;
  height: 100vh;
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
  background-color: $color-black;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: calc(6vw + 60px);

  transition: all 0.1s;
}

.nav-sp-window--is-open {
  transform: translateX(0);
}

.nav-sp-window__title {
  margin-top: 25vw;
}

.nav-sp-window__list {
  margin-top: 25vw;
}

.nav-sp-window__list__item {
  margin-bottom: 7vw;
}

.nav-sp-window__list__link {
  font-size: 24px;
  text-align: right;
}
</style>

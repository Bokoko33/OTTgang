import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export const state = () => ({
  isOpenModal: false,
  isShowLogo: false,
});

export const mutations = {
  switchModalState(state) {
    state.isOpenModal = !state.isOpenModal;
    if (state.isOpenModal) {
      disableBodyScroll();
    } else {
      clearAllBodyScrollLocks();
    }
  },
  showLogo(state) {
    state.isShowLogo = true;
  },
  hideLogo(state) {
    state.isShowLogo = false;
  },
};

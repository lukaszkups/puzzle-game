const state = {
  showLoginPopup: true,
};
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
const getters = {
  getLoginPopup(state) {
    return state.showLoginPopup;
  },
};

const mutations = {
  showLoginPopup(state) {
    state.showLoginPopup = true;
  },
  hideLoginPopup(state) {
    state.showLoginPopup = false;
  },
  toggleLoginPopup(state) {
    state.showLoginPopup = !state.showLoginPopup;
  },
};

const actions = {
  showLoginPopup({ commit }) {
    commit('showLoginPopup');
  },
  hideLoginPopup({ commit }) {
    commit('hideLoginPopup');
  },
  toggleLoginPopup({ commit }) {
    commit('toggleLoginPopup');
  },
};

/* eslint-enable no-shadow */
/* eslint-enable no-param-reassign */

export default {
  state,
  mutations,
  actions,
  getters,
};

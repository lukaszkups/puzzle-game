const state = {
  popupVisibility: true,
  userName: '',
};

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

const getters = {
  getLoginPopupState(state) {
    return state.popupVisibility;
  },
  getUserName(state) {
    return state.userName;
  },
};

const mutations = {
  showPopup(state) {
    state.popupVisibility = true;
  },
  closePopup(state) {
    state.popupVisibility = false;
  },
  togglePopup(state) {
    state.popupVisibility = !state.popupVisibility;
  },
  updateUserName(state, payload) {
    state.userName = payload;
  },
};

const actions = {
  showPopup({ commit }) {
    commit('showPopup');
  },
  closePopup({ commit }) {
    commit('closePopup');
  },
  togglePopup({ commit }) {
    commit('togglePopup');
  },
  updateUserName({ commit }, payload) {
    commit('updateUserName', payload);
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

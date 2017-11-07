const state = {
  errorsList: {},
};

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

const getters = {
  getErrors(state) {
    return state.errorsList;
  },
};

const mutations = {
  addError(state, payload) {
    if (state.errorsList &&
      (!state.errorsList[payload.errorOwner] ||
      !state.errorsList[payload.errorOwner].length)) {
      state.errorsList[payload.errorOwner] = [];
    }
    if (state.errorsList[payload.errorOwner].indexOf(payload.errorMessage) === -1) {
      state.errorsList[payload.errorOwner].push(payload.errorMessage);
    }
  },
  removeError(state, payload) {
    if (state.errorsList &&
      state.errorsList[payload.errorOwner] &&
      state.errorsList[payload.errorOwner].length) {
      state.errorsList[payload.errorOwner] = state.errorsList[payload.errorOwner].filter(obj =>
        obj !== payload.errorMessage,
      );
    }
  },
};

const actions = {
  addError({ commit }, payload) {
    commit('addError', payload);
  },
  removeError({ commit }, payload) {
    commit('removeError', payload);
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

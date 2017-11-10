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
      !state.errorsList.length) {
      state.errorsList = [];
    }
    if (state.errorsList.indexOf(payload) === -1) {
      state.errorsList.push(payload);
    }
  },
  removeError(state, payload) {
    if (state.errorsList &&
      state.errorsList.length) {
      state.errorsList = state.errorsList.filter(obj =>
        obj !== payload,
      );
    }
  },
  clearErrors(state) {
    state.errorsList = [];
  },
};

const actions = {
  addError({ commit }, payload) {
    commit('addError', payload);
  },
  removeError({ commit }, payload) {
    commit('removeError', payload);
  },
  clearErrors({ commit }) {
    commit('clearErrors');
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

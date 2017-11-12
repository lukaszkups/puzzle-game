const state = {
  userScoreVisibility: false,
  highScores: [],
};

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

const getters = {
  checkUserScoreVisibility(state) {
    return state.userScoreVisibility;
  },
  getHighScore(state) {
    return state.highScores;
  },
};

const mutations = {
  updateUserScoreVisibility(state, payload) {
    state.userScoreVisibility = payload;
  },
  updateHighScore(state, payload) {
    state.highScores = payload;
  },
};

const actions = {
  updateUserScoreVisibility({ commit }, payload) {
    commit('updateUserScoreVisibility', payload);
  },
  updateHighScore({ commit }, payload) {
    commit('updateHighScore', payload);
  },
};

/* eslint-enable no-shadow */
/* eslint-enable no-param-reassign */

export default {
  state,
  getters,
  mutations,
  actions,
};

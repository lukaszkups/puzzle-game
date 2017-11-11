const state = {
  puzzle: [],
};

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

const getters = {
  getPuzzles(state) {
    return state.puzzle;
  },
};

const mutations = {
  setPuzzles(state, payload) {
    state.puzzle = payload;
  },
  pushPuzzle(state, payload) {
    state.puzzle.push(payload);
  },
  updatePuzzle(state, payload) {
    state.puzzle[payload.order] = payload;
  },
};

const actions = {
  setPuzzles({ commit }, payload) {
    commit('setPuzzles', payload);
  },
  pushPuzzle({ commit }, payload) {
    commit('pushPuzzle', payload);
  },
  updatePuzzle({ commit }, payload) {
    commit('updatePuzzle', payload);
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

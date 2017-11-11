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
    // This won't work:
    // state.puzzle[payload.order] = payload;
    // Because of reactive var limitations mentioned here: https://vuejs.org/v2/guide/list.html#Caveats
    state.puzzle.splice(payload.order, 1, payload);
  },
  removePuzzle(state, payload) {
    const puzzleIndex = state.puzzle.findIndex(obj => obj.order === payload);
    state.puzzle.splice(puzzleIndex, 1);
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
  removePuzzle({ commit }, payload) {
    /* need to return promise because after every removal
        we have to check immediately if all puzzles are in
        place (so we can finish the game) */
    return new Promise((resolve) => {
      commit('removePuzzle', payload);
      resolve();
    });
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

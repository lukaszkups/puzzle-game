const state = {
  tiles: [],
};

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

const getters = {
  getTiles(state) {
    return state.tiles;
  },
};

const mutations = {
  setTiles(state, payload) {
    state.tiles = payload;
  },
  pushTile(state, payload) {
    state.tiles.push(payload);
  },
  updateTile(state, payload) {
    // This won't work:
    // state.tiles[payload.order] = payload;
    // Because of reactive var limitations mentioned here: https://vuejs.org/v2/guide/list.html#Caveats
    state.tiles.splice(payload.order, 1, payload);
  },
};

const actions = {
  setTiles({ commit }, payload) {
    commit('setTiles', payload);
  },
  pushTile({ commit }, payload) {
    commit('pushTile', payload);
  },
  updateTile({ commit }, payload) {
    commit('updateTile', payload);
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

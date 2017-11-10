const state = {
  startTime: 0,
  endTime: 0,
};

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

const getters = {
  getStartTime(state) {
    return state.startTime;
  },
  getEndTime(state) {
    return state.endTime;
  },
};

const mutations = {
  markStartTime(state, payload) {
    state.startTime = payload;
  },
  markEndTime(state, payload) {
    state.endTime = payload;
  },
  clearTimers(state) {
    state.startTime = 0;
    state.endTime = 0;
  },
};

const actions = {
  markStartTime({ commit }, payload) {
    commit('markStartTime', payload);
  },
  markEndTime({ commit }, payload) {
    commit('markEndTime', payload);
  },
  clearTimers({ commit }) {
    commit('clearTimers');
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

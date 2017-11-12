import Vue from 'vue';
import Vuex from 'vuex';

import loginPopup from './modules/loginPopup';
import errors from './modules/errors';
import timer from './modules/timer';
import board from './modules/board';
import puzzle from './modules/puzzle';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loginPopup,
    errors,
    timer,
    board,
    puzzle,
  },
});

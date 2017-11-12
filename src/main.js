// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueDragDrop from 'vue-drag-drop';

import App from './App';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(VueDragDrop);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});
/* eslint-enable no-new */

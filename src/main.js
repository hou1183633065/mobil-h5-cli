import './utils/flexible';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { Toast } from 'vant';

import './mock/index';
import HttpMixins from '@/mixins/http.mixins';

Vue.config.productionTip = false;
Vue.use(Toast);
Vue.mixin(HttpMixins);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

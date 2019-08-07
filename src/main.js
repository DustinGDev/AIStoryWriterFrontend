import Vue from 'vue';
import App from './App.js';
import router from './router';
import VModal from 'vue-js-modal';
import './registerServiceWorker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.use(VModal, {
  dynamic: true,
  dynamicDefaults: {
    clickToClose: false
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.less';
import './assets/css/font.css'
import './assets/css/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from "axios";
import qs from 'querystring'
import  api from './api/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// require styles
import 'swiper/dist/css/swiper.css'

axios.interceptors.request.use(
  function(config) {
    // console.log(config)
    // Do something before request is sent
    if(config.method == 'post'){
      console.log('1111')
      config.data = qs.stringify(config.data)
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

Vue.prototype.axios = axios;
Vue.prototype.$api = api;

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

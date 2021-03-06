import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2"; //importa a lib

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "sweetalert2/dist/sweetalert2.min.css"; //configura css
import router from './router'
import VueRouter from 'vue-router'


Vue.use(VueSweetalert2); //usa a biblioteca
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

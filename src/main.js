// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// https://scotch.io/tutorials/build-a-secure-to-do-app-with-vuejs-aspnet-core-and-okta
// https://scotch.io/courses/build-an-online-shop-with-vue/components-and-the-vue-instance
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io';
import config from './config'

export const SocketInstance = socketio('http://localhost:4113');

Vue.use(VueSocketIO, SocketInstance)

sync(store, router)

Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
})

//Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  store,
  router,
  beforeCreate () {
   store.commit('SET_SOCKET', socket);

  },
  components: { App },
  template: '<App/>',

})

export { app, router, store };



store.dispatch('checkLoggedIn')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MChat from '@maybecode/m-chat'
import beautifulChat from 'vue-beautiful-chat'

// Vue.use(MChat)
Vue.use(beautifulChat)

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

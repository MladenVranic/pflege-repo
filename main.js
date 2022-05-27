import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import intersection from './directives/intersection'
import slideInAnimation from './directives/slideInAnimation'
import hideComp from './directives/hideComp'
import VueScrollTo from 'vue-scrollto';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.directive('intersection', intersection);
Vue.directive('slideInAnimation', slideInAnimation);
Vue.directive('hideComp', hideComp);

new Vue({
  render: h => h(App)
}).$mount('#app')

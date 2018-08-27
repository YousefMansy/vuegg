import Vue from 'vue'
import App from './App'
import store from './store/'
import Vuetify from 'vuetify'
import router from './router/'
import VueSVGIcon from 'vue-svgicon'
import localforage from 'localforage'
import VueMDCAdapter from 'vue-mdc-adapter'
import Tooltip from 'vue-directive-tooltip'

import './theme.scss'
import 'normalize.css'
import 'vuetify/dist/vuetify.min.css'
import 'dialog-polyfill/dialog-polyfill.css'
import 'vue-directive-tooltip/css/index.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

localforage.config({ name: 'vuegg' })

Vue.use(VueSVGIcon)
Vue.use(VueMDCAdapter)
Vue.use(Vuetify)
Vue.use(Tooltip, {
  class: 'tooltip-vuegg',
  placement: 'bottom',
  delay: 50
})

Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

export default vm

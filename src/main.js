// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import VueAcl from 'vue-acl'
import VueML from 'vue-multilanguage'
import en from './lang/en'
import pt from './lang/pt'
import zh from './lang/zh'

// install plugin
Vue.use(Quasar) // Install Quasar Framework
Vue.use(Vuex)

Vue.use(VueAcl, {router: router, d_permission: 'any', store: store})
// Vue.use(VueML, {path: 'src/lang', d_language: 'zh', store: store})
Vue.use(VueML, {
  default: 'en',
  en: en,
  pt: pt,
  zh: zh
})

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})

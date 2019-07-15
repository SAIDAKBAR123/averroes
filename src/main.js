import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate';
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import "@/assets/css/global.css" 
import YmapPlugin from 'vue-yandex-maps'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

const settings = { 
  apiKey: '3A6238712318f251319073449f52d33e3e79f7a39527142bb18ccf99112f166f17',
  lang: 'ru_RU',
  version: '2.1'
}
Vue.use(YmapPlugin, settings)
Vue.use(VeeValidate);
Vue.config.productionTip = false
Vue.component('y-map',yandexMap)
Vue.component('y-mapMarker',ymapMarker)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

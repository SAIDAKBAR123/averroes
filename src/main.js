import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate';
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import "@/assets/css/global.css" 
import "@/assets/mainJS/main"
import YmapPlugin from 'vue-yandex-maps'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import Carousel3d from 'vue-carousel-3d';
import VueInstagram from 'vue-instagram'
import PopularCourses from './components/Shared/PopularCourses.vue'
import Gallery from './components/Shared/Gallery.vue'
import SubFooter from './components/Footer/SubFooter.vue'
import VueQuillEditor from 'vue-quill-editor'
import * as firebase from 'firebase';
import AOS from 'aos';

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'aos/dist/aos.css';

const settings = { 
  apiKey: '3A6238712318f251319073449f52d33e3e79f7a39527142bb18ccf99112f166f17',
  lang: 'ru_RU',
  version: '2.1'
}
Vue.use(YmapPlugin, settings)
Vue.use(VeeValidate);
Vue.use(Carousel3d);
Vue.use(VueInstagram)
Vue.use(VueQuillEditor)

Vue.config.productionTip = false
Vue.component('y-map',yandexMap)
Vue.component('y-mapMarker',ymapMarker)
Vue.component('v-courses', PopularCourses)
Vue.component('v-gallery',Gallery)
Vue.component('v-sub-footer',SubFooter)
new Vue({
  created () {
    AOS.init()
    firebase.initializeApp({
      apiKey: "AIzaSyBe33RsbSkFIvAqp39SxInF2K8dmId8jHg",
      authDomain: "averroesuz.firebaseapp.com",
      databaseURL: "https://averroesuz.firebaseio.com",
      projectId: "averroesuz",
      storageBucket: "averroesuz.appspot.com",
      messagingSenderId: "514217029959",
      appId: "1:514217029959:web:c1a54e4493d4d1db"
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user){
        this.$store.dispatch('autoSignIn',user)
      }
    })
    this.$store.dispatch('loadMeetup')
    this.$store.dispatch('loadEvent')
    this.$store.dispatch('loadUserReg')
    
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

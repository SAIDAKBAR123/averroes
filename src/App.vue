<template>
  <v-app>
     <app-header/>
    <v-content>
        <transition name="slide" mode="out-in">
      <router-view/>
        </transition>
    </v-content>
    <main-footer/>
   
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import MainFooter from './components/Footer/MainFooter.vue'
export default {
  components:{
    AppHeader,
    MainFooter,
  },
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
<style>
.slide-enter-active{
animation: slide-in 400ms ease-out forwards;
}
.slide-leave-active{
animation: slide-out 400ms ease-out forwards;
}
@keyframes slide-in {
  from{
    transform: translateY(-30px);
    opacity:0;
  }
  to{
    transform:translateY(0);
    opacity:1;
  }
}
@keyframes slide-out {
  from{
    transform: translateY(0);
    opacity:1;
  }
  to{
    transform:translateY(-30px);
    opacity:0;
  }
}
</style>


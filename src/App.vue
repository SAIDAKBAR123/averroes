<template>
  <v-app>
      <v-navigation-drawer
       class="back-drawer"
        v-model="drawer" 
        fixed
        hide-overlay
         temporary
        
       app
        
      >
        <v-list >
       <v-list-tile-content >
              <span class="clickable px-4" v-on:click="pushing"><img  width="200" src="@/assets/img/logo.svg"></span>
             </v-list-tile-content>
        </v-list>
  
        <v-list fixed class="pt-0">
          <v-divider></v-divider>
  
          <v-list-tile
         
          v-for="(item ,i) in menuList" :key="i"
          :to="item.route"
           >
  
            <v-list-tile-content>
              <v-list-tile-title class="title_font text-uppercase">{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
<v-divider/>
   <v-list-tile >
       <v-list-tile-action>
            </v-list-tile-action>
           <v-list-tile-content>
       <v-list-tile-title  >Russian</v-list-tile-title>
           </v-list-tile-content>
        </v-list-tile>

<v-list-tile>
        <v-list-tile-action >
            </v-list-tile-action>
            <v-list-tile-content>
               <v-list-tile-title >English</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
     
        </v-list>
      </v-navigation-drawer>
      <!--toolbar main-->
   <v-toolbar  temporary  color="transparent" flat app>
      <v-toolbar-side-icon dark color="transparent" @click.stop="drawer=!drawer" class="hidden-md-and-up"></v-toolbar-side-icon> 
      <v-toolbar-title justify-center class="mt-3">
       <span class="clickable" v-on:click="pushing"><img src="@/assets/img/logo_dark.svg" width="200" alt=""></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
     <v-list-tile
         class="hidden-sm-and-down"
          v-for="(item ,i) in menuList" :key="i"
          :to="item.route"
           >
  
            <v-list-tile-content>
              <v-list-tile-title class="white--text text-uppercase">{{item.title}} /</v-list-tile-title>
            </v-list-tile-content>
           
          </v-list-tile>
          <v-spacer></v-spacer>
    </v-toolbar>

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
      drawer:false,
      colors:[
        '254 Street Avenue, Los Angeles, LA 2415 US.',
       'Mon - Fri : 09:00 - 17:00',
        '+998 (90) 574-34-23',
      ]
    }
  },
  methods:{
 pushing(){
    this.$router.push('/')
  }
  },
  computed:{
         menuList (){
        return[
           
            {
                icon: '',
                title:'about',
                route: '/about'
            },
             {
                icon:'',
                title:'services',
                route: '/services'
            },
            {
                icon:'',
                title:'courses',
                route: '/courses'
            },
            {
                 icon:'',
                title:'events',
                route: '/events'
            },
              {
                 icon:'',

                title:'contacts',
                route: '/contacts'
            }
        ]
    }
}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i&display=swap&subset=greek,latin-ext');
.font{
font-family: 'Noto Sans', sans-serif;
position: absolute;
z-index: 10;
}
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


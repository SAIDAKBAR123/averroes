<template>
  <v-app id="inspire">
    <v-toolbar dense absolute color="transparent"  flat dark>
   
    <v-toolbar-items class="hidden-sm-and-down">
   
             <div class="row ">
                <div class="rombo" v-for="i in address" :key="i.title">
                <div class="row">
                  <v-icon class="mt-0 pl-1 ml-4" style="font-size:1.4rem;">{{i.icon}}</v-icon>
                 <p class="mx-1 my-3 title_mplus" style="font-size:0.9rem;">{{i.title}}</p>
                 </div>
                 
                </div>
              
             </div>
       
    
    </v-toolbar-items><v-spacer></v-spacer>
     <v-toolbar-side-icon clipped-right></v-toolbar-side-icon> 
  </v-toolbar>

   <v-toolbar height="200" absolute flat
 color="transparent" app fixed>
       <v-toolbar-title dark justify-center class="mt-3 hidden-sm-and-down">
       <span class="clickable" v-on:click="pushing"><img src="@/assets/img/logo_dark.svg" width="200" alt=""></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
     <v-list-tile
         class=" hidden-sm-and-down"
          v-for="(item ,i) in menuList" :key="i"
          :to="item.route"
           >
            <v-toolbar-items>
        <v-btn dark round flat class="title_font">{{item.title}}</v-btn>
            </v-toolbar-items>
          </v-list-tile>
          <v-spacer></v-spacer>
           <v-list-tile v-for="item in social" :key="item.type" 
             class="hidden-sm-and-down"
             v-on:click="redirecting(item.link)"
            >      
           <i style="font-size:1.5rem; color:white;" :class="item.icon"></i>  
           </v-list-tile> 
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
      ],
       social:[
      {
        type:'Instagram',
        link:'http://instagram.com/averroes.consulting/',
        icon:'fab fa-instagram'
      },
       {
        type:'Telegram',
        link:'https://t.me/averroes_consulting',
        icon:'fab fa-telegram'
      },
     { 
       type:'Facebook',
       link:'example.com',
       icon:"fab fa-facebook-f"
     }
    ],
      address:[
          {
            title:' 254 Street Avenue, Los Angeles, LA 2415 US.',
            icon :'room'
          },
          {
            title:' Mon - Fri : 09:00 - 17:00',
            icon :'watch'
          },
          {
            title:' 8 800 256 35 87',
            icon :'call'
          }
        ]
    }
  },
  methods:{
 pushing(){
    this.$router.push('/')
  },
   redirecting(link){
  window.open(link,'_blank')
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
#inspire {
  height: 100vh;
}
.rombo{
  width: 350px;
 border-right: 0.5px solid rgba(209, 208, 208, 0.411);
  border-bottom: 0.5px solid rgba(202, 202, 202, 0.459);

}
</style>


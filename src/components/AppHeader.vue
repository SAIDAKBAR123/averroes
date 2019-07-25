<template>
  <div class="elevate">
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
              <span class="clickable px-3" v-on:click="pushing"><img  width="200" src="@/assets/img/logo.svg"></span>
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
  <!-- <v-list-tile >
      
           <v-list-tile-content>
       <v-list-tile-title  >Russian</v-list-tile-title>
           </v-list-tile-content>
        </v-list-tile>

<v-list-tile>
            <v-list-tile-content>
               <v-list-tile-title >English</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>-->
     
        </v-list>
      </v-navigation-drawer>

     <v-toolbar  inverted-scroll
 height="74" dark flat app>

        <v-toolbar-side-icon dark @click.stop="drawer=!drawer" class="hidden-md-and-up"></v-toolbar-side-icon> 
      <v-toolbar-title class="mt-2">
         <span class="clickable" v-on:click="pushing"><img src="../assets/img/logo_dark.svg" width="200" alt=""></span>
        
      </v-toolbar-title>
      <v-spacer></v-spacer>
     <v-list-tile
         class="hidden-sm-and-down overflow-x-hidden"
          v-for="(item ,i) in menuList" :key="i"
          :to="item.route"
           >
            <v-list-tile-content>
              <v-list-tile-title class="title_font text-uppercase">{{item.title}} </v-list-tile-title>
            </v-list-tile-content>
          
          </v-list-tile>
           <v-spacer></v-spacer>
           <v-list-tile v-for="item in social" :key="item.type" 
             class="hidden-sm-and-down"
             v-on:click="redirecting(item.link)" 
            >
             
              
           <i style="font-size:1.5rem" :class="item.icon"></i>
               
           </v-list-tile>
    </v-toolbar>

    <!--NAvigation drawer-->
   
  </div>
</template>

<script>
export default {
data(){
  return{
    drawer:false,
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
    ]
  }
},
methods: {
  pushing(){
    this.$router.push('/')
  },
  redirecting(link){
  window.open(link,'_blank')
  }
},
 computed:{
         menuList(){
        return[
           
            {
                icon: '',
                title:'о нас',
                route: '/about'
            },
             {
                icon:'',
                title:'Услуги',
                route: '/services'
            },
            
            {
                 icon:'',
                title:'События',
                route: '/events'
            },
              {
                 icon:'',

                title:'контакты',
                route: '/contacts'
            }
        ]
    }
}
}
</script>

<style scoped>
.elevate{
z-index: 10;
}
</style>

<template>
  <div>

   <v-toolbar  my5 color="transparent" flat app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Averroes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
     <v-list-tile
         
          v-for="(item ,i) in menuList" :key="i"
          :to="item.route"
           >
          
            <v-list-tile-content>
              <v-list-tile-title class="text-uppercase">{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-spacer></v-spacer>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>facebook</v-icon>
            </v-list-tile-action>
          </v-list-tile>
    </v-toolbar>

     <v-toolbar inverted-scroll dark flat app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Averroes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
     <v-list-tile
         
          v-for="(item ,i) in menuList" :key="i"
          :to="item.route"
           >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
  
            <v-list-tile-content>
              <v-list-tile-title class="text-uppercase">{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
           
          </v-list-tile>
    </v-toolbar>

    
  </div>
</template>

<script>
export default {
data(){
  return{
    
  }
},
 computed:{
         menuList(){
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

</style>

<template>
    <div class="space_middle">
        <v-layout>
             <v-flex dark justify-center md12 xs12 offset-(md)(3) >
                      <h1 class="title_beauty text-xs-center mb-5">Популярные курсы</h1>
                  
                  </v-flex>
        </v-layout>
      <v-layout row wrap offset-md1>
           <v-flex align-end  md3 sm6 xs12 v-for="item in courses" :key="item.title">
      <v-hover>
    <v-card
    
      slot-scope="{ hover }"
      class="mx-auto mb-2 elevation-10"
      color="transparent"
    max-width="290"
    height="370"
     
      
    >
      <v-img
        :aspect-ratio="16/9"
        :src="item.imageUrl"
      >
     
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
           Averroes
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class=""
     style="position: relative;
     height:120px"
      >
         <v-btn
          absolute
          color="transparent"
          class="white--text"
          fab
          
          right
         top
        >
        <v-avatar>
             <v-img
             :src="item.imageUrl"
             >
             </v-img>
        </v-avatar>
        </v-btn>
        <div  class="text-xs-start title_playball black--text  mb-2 pt-3">{{item.title}}</div>
        <h6 class="text-xs-start title_crilic
 font-weight-light grey--text mb-2" v-html="`${item.description.substring(0,70)}`+'...'"></h6><v-spacer/>
     
      </v-card-text>
      <v-divider></v-divider>
      
          <v-btn  class="text-xs-start p-2"  :to="'/courses/'+item.id" round large outline color="blue" >подробно <v-icon>keyboard_arrow_right</v-icon></v-btn>
      
    </v-card>
  </v-hover>
</v-flex>

</v-layout>
<v-layout class="mt-5" justify-center align-center>
  <v-btn outline to="/courses" large round color="blue">View more...</v-btn>
</v-layout>
    </div>
</template>

<script>
export default {

    computed:{
    courses(){
        return this.$store.getters.loadedMeetups 
    }
    },
  

}

</script>

<style>

</style>

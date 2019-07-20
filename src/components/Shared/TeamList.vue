<template>
  <div v-show="false" class="space_middle">
     <v-layout  justify-center row wrap>
    <v-flex md12 sm12 xs12 offset-(xs)(1)>
       <v-card flat  tile>
          <v-flex xs12 sm12 md12>
               <v-layout
               dark
            column
          >
            <h1 class="title_beauty p-2 text-xs-center" style="color:#c7b3a2">Our Staff</h1>

            <div class="mr-4 new_times  text-xs-center col"><p>We work to make your business start effectively working for you.<br>
Meet the financial and marketing specialists.</p>
             <hr class="grey darken-3 accent-2 mt-0 d-inline-block mx-auto" style="width: 10%;">
            </div>
         
          </v-layout>
          </v-flex>
       
         </v-card>
    </v-flex>
    </v-layout>
    <v-layout row wrap justify-center >
    <v-flex align-end  md4 sm6 xs12 v-for="item in intro" :key="item.icon">
      
       <v-hover>
    <v-card
      flat
      slot-scope="{ hover }"
      class="mx-auto"
      color="transparent"
      max-width="300"
    >
      <v-img
        :aspect-ratio="10/10"
        :src="item.link"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            facebook
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
      
        <div class="text-xs-center new_times  grey--text  mb-2">{{item.title}}</div>
        <h3 class="text-xs-center title_playball font-weight-light grey--text mb-2">{{item.text }}</h3>
       <h3 class="text-xs-center title_playball font-weight-light grey--text mb-2">|</h3>
      </v-card-text>
    </v-card>
  </v-hover>

    </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
data(){
  return{
    intro:[
          {
          link:'http://invetex.themerex.net/wp-content/uploads/2016/04/team3-370x334.png',
          title:'Steven Monroe',
          text:'Marketing & Advertising'
          },
              {
          link:'http://invetex.themerex.net/wp-content/uploads/2016/04/team1-370x334.png',
          title:'Michael King',
          text:'Finance & Commerce'
         },
              {
          link:'http://invetex.themerex.net/wp-content/uploads/2016/04/team2-370x334.png',
          title:'Romeo Alvarez',
          text:'Company Director'
          }
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
  }
}
}
</script>


<style scoped>

</style>

<template>
    <div>
         <v-parallax class="top-banner" height="390">
         
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
    
            <h1 class="white--text mb-2 title_font text-xs-center">События</h1>
            <div class="white--text headline mb-3 text-xs-center">
                 <v-breadcrumbs dark :items="items">
      <template v-slot:divider>
        <v-icon>keyboard_arrow_right </v-icon>
      </template>
    </v-breadcrumbs>
            </div>
          
          </v-layout>
         
        </v-parallax>
           <v-layout row wrap justify-center>
              <v-card flat  tile>
          <v-flex xs12 sm12 md12>
               <v-layout
               dark
            column
          >
            <h1 class="title_beauty p-2 text-xs-center" style="color:#c7b3a2">We are always ahead</h1>
            <div class="mr-4 title_font text-xs-center col"><p>We provide premium customer support and offer affiliate programs.</p>
             <hr class="deep-black accent-2 mt-0 d-inline-block mx-auto" style="width: 10%;">
            </div>
         
          </v-layout>
          </v-flex>
       
         </v-card>
        </v-layout>
          <v-layout row wrap v-if="loading">
                <v-flex xs12>
<v-progress-linear indeterminate v-if="loading"></v-progress-linear>
                    <h5 v-if="loading" class="text-xs-center secondary--text">Contnent are being ready, please wait...</h5>
               
                </v-flex>
            </v-layout>

        <v-layout col wrap v-else>
        <v-flex xs12 sm6 offset-sm3 v-for="i in events" :key="i.title" >
      <v-card class="mb-2 mt-2">
        <v-img
          :src="i.imageUrl"
          height="130"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{i.title}}</div>
            <span class="grey--text">{{i.date}}-be with us</span>
          </div>
        </v-card-title>

        <v-card-actions>
          
          <v-btn :to="'/event/'+i.id" flat color="purple">More...</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="i.id=!i.id">
            <v-icon>{{ i.id ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="!i.id" v-html="i.description.substring(0,120)+'...'">
           
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
        </v-layout>
         <v-sub-footer/>
    </div>
</template>

<script>
export default {
data(){
  return {
    show:null,
      items: [
        {
          text: 'Главная',
          disabled:true,
          href: '/'
        },
        {
          text: 'События',
          disabled: true,
          href: 'events'
        }
      ]
  }
},
computed:{
    events(){
        return this.$store.getters.loadedEvents 
    },
     loading(){
           return this.$store.getters.loading
       
       }


   },
   methods:{
   
   }

}
</script>

<style scoped>
.top-banner{
background-image: url('../assets/img/events_back.jpg');
background-size: cover;
}
</style>

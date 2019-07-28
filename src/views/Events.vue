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
            <h1 class="title_beauty p-2 mt-5 text-xs-center" >Наши последние посты</h1>
            <div class="mr-4 title_font text-xs-center col">
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
         
          </div>
        </v-card-title>

        <v-card-actions>
          
          <v-btn class="text-xs-center" :to="'/event/'+i.id" flat large outline  round color="blue darken-2">подробно <v-icon>keyboard_arrow_right</v-icon></v-btn>
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
    <v-flex xs12 sm6 offset-sm3>
 <paginate
    :page-count="20"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'">
  </paginate>

   <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
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
    page:1,
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
       
       },
       page(){

       }


   },
   methods:{
     clickCallback (pageNum) {
      console.log(pageNum)
    }
   }

}
</script>

<style scoped>
.top-banner{
background-image: url('../assets/img/events_back.jpg');
background-size: cover;
}
</style>

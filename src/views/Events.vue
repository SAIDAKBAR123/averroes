<template>
    <div>
         <v-parallax class="top-banner" height="390">
         
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
    
            <h1 class="white--text mb-2 title_font text-xs-center">Блог</h1>
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
                    <h5 v-if="loading" class="text-xs-center secondary--text">Content are being ready, please wait...</h5>
               
                </v-flex>
            </v-layout>

        <v-layout class="mb-5" col wrap v-else>
        <v-flex xs12 sm6 offset-sm3 v-for="i in events" 
       
        :key="i.title" >
     <!-- <v-card class="mb-2 mt-2">
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
          
          <v-btn class="text-xs-center" :to="'/event/'+i.id" flat small outline  round color="blue darken-2">подробно <v-icon>keyboard_arrow_right</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="i.id=!i.id">
            <v-icon>{{ i.id ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="!i.id" v-html="i.description.substring(0,120)+'...'">
           
          </v-card-text>
        </v-slide-y-transition>
      </v-card>-->

    
      <v-layout row wrap>
        <v-flex xs12 class="my-2" md4>
        <v-img
          :src="i.imageUrl"
         
          height="220px"
        ></v-img>
      </v-flex>
      <v-flex xs12 md7>
        <v-card class="my-2" height="220px">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0" v-text="i.title.substring(0,40)+'...'"></h3>
            <div v-html="i.description.substring(0,100)+'...'"> </div>
          </div>
        </v-card-title>

        <v-card-actions class="mb-2 p-1">
          <v-btn  flat :to="'/event/'+i.id" color="red darken-1">Продолжить</v-btn><v-spacer></v-spacer><span class="p-2"><v-icon>access_time</v-icon></span><span class="my-2" >{{formatDate(i.date)}}</span>
        </v-card-actions>
        </v-card>
        </v-flex>
     </v-layout>
   

    </v-flex>
    <v-flex xs12 sm6 offset-sm3>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
    </v-flex>
        </v-layout>
         <v-sub-footer/>
    </div>
</template>

<script>
import Pagination from '../components/Shared/pagination/Pagination.vue'
export default {
  components:{
   VuePagination: Pagination,
  },
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
          text: 'Блог',
          disabled: true,
          href: 'events'
        }
      ]
  }
},
methods:{

formatDate(d){
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var t = new Date(d);
  return t.getDate()+'-'+monthNames[t.getMonth()]+'-'+t.getFullYear();
}
     

},
computed:{
  
    events () {
        return this.$store.getters.loadedEvents 
    },
     loading(){
           return this.$store.getters.loading   
       },
   },



}
</script>

<style scoped>
.top-banner{
background-image: url('../assets/img/events_back.jpg');

}
</style>

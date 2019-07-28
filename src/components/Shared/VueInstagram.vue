<template>
<div class="my-2">
 <v-container>
    <v-layout row wrap  justify-space-around justify-start align-start>
      <v-flex md4 xs12>
        <h1 class="title_beauty text-xs-center p-1 mt-3 pb-2 mb-3">Наши последние посты</h1>
        <v-card class="" dark color="green">
           <v-list three-line>
            
          <template v-for="(item, index) in events">
            <v-list-tile
             
              :key="item.title"
              avatar
              :to="'/event/'+item.id"
            >
              <v-list-tile-avatar class="mt-1" size="60">
                <img :src="item.imageUrl">
              </v-list-tile-avatar>

              <v-list-tile-content class="p-3">
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-spacer></v-spacer>
                <v-list-tile-sub-title v-html="item.description.substring(0,40)+'&#8230;&#8230;'"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
        </v-card>
      </v-flex>
    <v-flex class="hidden-sm-and-down" md8 xs12>
     
     <!-- <div class="text-xs-center col">
       <h1 class="instagram ">Instagram</h1><v-spacer></v-spacer>
<v-btn color="blue"  href="https://www.instagram.com/averroes.consulting/" dark>Follow</v-btn>

</div>
      <div class="col">
         <vue-custom-scrollbar class="scroll-area"  >
 <vue-instagram token="12863084980.7106a38.27859055bceb45e9bb3cd183a3e2b238" username="i.saidakbar" :count="5">
   
    <template slot="feeds" scope="props">
   
   <v-card
   
    max-width="320"
    class="mx-auto my-auto elevation-10"
  >
    <v-list-item >
     
         <v-avatar class="ml-2 pr-2 mb-2 pt-2 " size="39">
      <img
       
        :src="props.feed.user.profile_picture"
        alt="John"
      >
    </v-avatar>
  
        <v-list-item-title class="font-weight-bold font-weight-medium body"><span class="ml-1 pr-4">{{props.feed.user.username }} </span> <v-btn class="ml-5 pl-5" left :href="props.feed.link" small fab dark flat> <i style="font-size:2rem; color:black" class="fab fa-instagram"></i></v-btn></v-list-item-title>
     
    </v-list-item>

    <v-img
      :src="props.feed.images.standard_resolution.url"
      height="320"
    ></v-img>

    <v-card-actions>
  <v-btn icon :href="props.feed.link">
<i class="far fa-heart sizing"></i>  </v-btn>
   <v-btn icon :href="props.feed.link">
   <i class="far fa-comment sizing"></i> 
  </v-btn>
    <v-spacer></v-spacer>
     <v-btn flat icon :href="props.feed.link">
    <i class="far fa-bookmark sizing"></i> 
  </v-btn>
 
    </v-card-actions>
      <p class="ml-3 font-weight-black"> {{props.feed.likes.count}} likes</p>
   <div class="m-1 p-0 row">
    
     <p class="p-1 m-0" v-for="(tag,i) in props.feed.tags" :key="i">
     <a :href="props.feed.link" target="_blank" rel="noopener noreferrer">#{{tag}}</a> 
     </p>
</div>
    <div class="p-2" v-text="props.feed.caption.text.substring(0,200)+'...'">
     
    </div>

  </v-card>
<br>
    </template>
   
   
    <template slot="error" scope="props">
        <div class="fancy-alert"> {{ props.error.error_message }} </div>
    </template>
    
</vue-instagram>
</vue-custom-scrollbar>
</div>-->

<div class="elfsight-app-081b7506-5c93-422d-98f7-f982c0025854"></div>


 </v-flex>
  
    </v-layout>
  </v-container>
  <v-layout>
    <v-flex xs12 md12 justify-center align-center>
   
    </v-flex>
  </v-layout>
 <!-- <div class="elfsight-app-081b7506-5c93-422d-98f7-f982c0025854"></div>-->
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
    components: {
    vueCustomScrollbar
  },
 
 computed:{
    events(){
        return this.$store.getters.loadedEvents 
    },
     loading(){
           return this.$store.getters.loading
       }

   }
}
</script>

<style scoped>
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');

.scroll-area {
  padding:1rem;
 background-color: rgba(155, 155, 155, 0.753);
  position: relative;
  margin: auto;
  width: 390px;
  height: 430px;
}
.instagram_icon {
  display: inline-block;
  width: 5rem;
  height:5rem;;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  font-size: 4rem;
  line-height: 70px;
  
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
}
.sizing{
  font-size: 2rem;
  color: rgba(37, 37, 37, 0.767);
  
}
</style>

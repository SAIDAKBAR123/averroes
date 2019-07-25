<template>
<div class="my-2">
 <v-container>
    <v-layout row wrap align-center justify-center>
      <v-flex md6 xs12>
        <h1 class="title_beauty text-xs-center mb-2">Наши последние посты</h1>
        <v-card dark color="green">
           <v-list three-line>
            
          <template v-for="(item, index) in events">
            <v-list-tile
             
              :key="item.title"
              avatar
              :to="'/events/'+item.id"
            >
              <v-list-tile-avatar>
                <img :src="item.imageUrl">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.date"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
        </v-card>
      </v-flex>
    <v-flex md6 xs12>
     
      <div class="row m-3">
        <span class="instagram_icon">
  <span class="fa fa-instagram"></span>
</span>
<h1 class="instagram title_beauty mt-4 p-1 pl-2">instagram</h1>
</div>
      <div class="col">
         <vue-custom-scrollbar class="scroll-area"  >
 <vue-instagram token="6138362237.2d8d391.e4da54ff5695492b88532553d41318f9" username="i.saidakbar" :count="5">
   
    <template slot="feeds" scope="props">
   
   <v-card
   
    max-width="350"
    class="mx-auto my-auto elevation-10"
  >
    <v-list-item >
     
         <v-avatar class="ml-2 pr-2 mb-2 pt-2 " size="39">
      <img
       
        :src="props.feed.user.profile_picture"
        alt="John"
      >
    </v-avatar>

    
       
        <v-list-item-title class="font-weight-bold font-weight-medium body"><span class="ml-1">{{props.feed.user.username }}</span> <v-btn class="pl-3 ml-5" :href="props.feed.link" round dark outline color="blue">view profile</v-btn></v-list-item-title>
       
      
     
    </v-list-item>

    <v-img
      :src="props.feed.images.standard_resolution.url"
      height="230"
    ></v-img>

    <v-card-actions>
  <v-btn icon :href="props.feed.link">
    <v-icon color="grey darken-1">favorite_border</v-icon>
  </v-btn>
   <v-btn icon :href="props.feed.link">
    <v-icon  color="grey darken-1">chat_bubble_outline</v-icon>
  </v-btn>
    <v-spacer></v-spacer>
     <v-btn icon :href="props.feed.link">
    <v-icon  color="grey darken-1">turned_in_not</v-icon>
  </v-btn>
    </v-card-actions>
   <div class="mx-auto">
     <p class="ml-3 font-weight-black"> {{props.feed.likes.count}} likes</p>
</div>
    <v-card-text>
     {{props.feed.caption.text}}
    </v-card-text>

  </v-card>
<br>
    </template>
   
   
    <template slot="error" scope="props">
        <div class="fancy-alert"> {{ props.error.error_message }} </div>
    </template>
    
</vue-instagram>
</vue-custom-scrollbar>
</div>
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
  background: #f09433; 
background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  padding:1rem;
 background-color: antiquewhite;
  position: relative;
  margin: auto;
  width: 600px;
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
</style>

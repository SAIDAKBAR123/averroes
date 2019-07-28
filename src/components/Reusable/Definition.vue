<template>
    <div>
         <v-parallax class="service" height="250">
          <v-layout
            column
            align-center
            justify-end
            class="overlays white--text"
          >
    
            <h1 class="white--text title_font text-xs-center">Курс</h1>
            <div class="headline mb-3 text-xs-center">
                <v-breadcrumbs dark :items="navgation">
      <template v-slot:divider>
        <v-icon>keyboard_arrow_right</v-icon>
      </template>
    </v-breadcrumbs>
            </div>
          
          </v-layout>
         
        </v-parallax>
<v-container>
    <v-layout row wrap>
        <v-flex xs12 sm12 md8>
  <v-layout row wrap v-if="loading">
                <v-flex xs12>
<v-progress-linear indeterminate v-if="loading"></v-progress-linear>
                    <h5 v-if="loading" class="text-xs-center secondary--text">Континент готовится, пожалуйста, подождите ...</h5>
               
                </v-flex>
            </v-layout>
          <v-layout column wrap v-else>
              <v-flex xs12 sm6 md12>
                    <h2 class="mt-4 pt-1 pr-1 pl-2 title_popins">{{course.title}}</h2>
              </v-flex>
              <v-flex xs12 sm6 md12>
                   <v-card color="blue" tile flat>
                   
               <v-carousel hide-delimiters  height="300"   hide-controls>
                    <v-carousel-item
                  
                    :src="course.imageUrl"
                  
                    
                    >
                    </v-carousel-item>
                    </v-carousel>
            </v-card>
              </v-flex>
              <v-flex xs12 sm6 md12 mt2>
                  <v-card flat tile color="transparent">
<v-card-text class="title_crilic" v-html="course.description"></v-card-text>
                  </v-card>

              </v-flex>
          </v-layout>

        </v-flex>

         <v-flex xs12 sm12 md4>
              <v-layout column wrap>
              <v-flex xs12 sm12 md12 offset-md2>
                    <h2 class="title_beauty mt-4 pl-3">Kатегория</h2>
              </v-flex>
              <v-flex xs12 sm6 md12 offset-md2>
                   <v-card color="yellow" tile flat>
                            <v-list>
          <template v-for="(item, index) in courses">
            <v-list-tile
            class="tile"
              :key="index"
              :to="'/courses/'+item.id"
              
              ripple 
             
            >
              <v-list-tile-action>
                <v-icon> arrow_forward_ios</v-icon>
              </v-list-tile-action>
            
              <v-list-tile-content>
                <v-list-tile-title class="tile_title title_beauty font-weight-bold">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
            </v-card>
              </v-flex>
              <v-flex class="mb-2 mt-3" xs12 sm6 md12 offset-md2 justify-start>
                <v-flex xs12 md12 >
                  <h2 class="title_beauty mb-4"> Следите за нами в инстаграм</h2>
                </v-flex>
                <v-card color="transparent" tile flat>
          <div class="elfsight-app-081b7506-5c93-422d-98f7-f982c0025854"></div>
                </v-card>
              </v-flex>
              <v-flex xs12 md12 sm6 offset-md2>
              
                    <v-list three-line>
               <h2 class="title_beauty p-1 mt-5 pb-2 mb-3">Наши последние посты</h2>
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
                <v-list-tile-title class="tile_title" v-html="item.title"></v-list-tile-title>
                <v-spacer></v-spacer>
                <v-list-tile-sub-title v-html="item.description.substring(0,40)+'&#8230;&#8230;'"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>

              </v-flex>


             <v-flex
             offset-md2 offset-xs1
      xs12
      class="mb-3 mt-2"
    >
      <v-sheet  height="200">
        <v-calendar 
          ref="calendar"
         
          color="primary"
        ></v-calendar>
      </v-sheet>
    </v-flex>

          </v-layout>
        </v-flex>
    </v-layout>
</v-container>

    
    </div>
</template>

<script>
export default {
    data () {
      return {
        
          navgation: [
        {
          text: 'Главная',
          disabled: true,
          href: '/'
        },
        {
          text: 'Курс',
          disabled: true,
          href: 'contacts'
        },
      
      ],
       
    }
    },
    
    props:['id'],
 computed:{
    events(){
        return this.$store.getters.loadedEvents 
    },
      courses(){
        return this.$store.getters.loadedMeetups 
    },
     course(){
         return this.$store.getters.loadedMeetup(this.id)
     },
     userIsAuth(){
         return this.$store.getters.user!==null && this.$store.getters.user!==undefined
     },
     userIsCreator(){
         if(!this.userIsAuth){
             return false
         }
         return this.$store.getters.user.id===this.course.createId
     },
       loading(){
           return this.$store.getters.loading
       }
 },
 methods:{
     events(id){
         this.$router.push(`/courses/${id}`)
     }
 }
  }
</script>

<style scoped>

.tile {
    margin: 5px;
    border-radius: 20px;
  }
  .tile:hover {
    background: rgba(207, 204, 204, 0.836);
    color: white;
    border-radius: 20px;
  }
  .tile_title:hover{
color: rgb(68, 68, 68)
  }

</style>

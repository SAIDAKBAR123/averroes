<template>
    <div>
         <v-parallax class="service" height="250">
          <v-layout
            column
            align-center
            justify-end
            class="overlays white--text"
          >
    
            <h1 class="white--text title_font text-xs-center">Course</h1>
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
                    <h5 v-if="loading" class="text-xs-center secondary--text">Contnent are being ready, please wait...</h5>
               
                </v-flex>
            </v-layout>
          <v-layout column wrap v-else>
              <v-flex xs12 sm6 md12>
                    <h2 class="mt-4 pt-1 pr-1 pl-2 title_popins">{{course.title}}</h2>
              </v-flex>
              <v-flex xs12 sm6 md12>
                   <v-card color="blue" tile flat>
                   
               <v-carousel height="300"   hide-controls>
                    <v-carousel-item
                  
                    :src="course.imageUrl"
                  
                    
                    >
                    </v-carousel-item>
                    </v-carousel>
            </v-card>
              </v-flex>
              <v-flex xs12 sm6 md12>
                  <v-card flat tile color="transparent">
                       <v-toolbar
                       flat
      color="transparent"
      
      tabs
      dense
      
    >
      <template >
        <v-tabs
          v-model="tab"
        
          dark
          grow
        >
          <v-tabs-slider color="blue"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text v-html="course.description"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
                  </v-card>

              </v-flex>
          </v-layout>

        </v-flex>

         <v-flex xs12 sm12 md4>
              <v-layout column wrap>
              <v-flex xs12 sm12 md12 offset-md2>
                    <h2 class="mt-4 pl-3">Category</h2>
              </v-flex>
              <v-flex xs12 sm6 md12 offset-md2>
                   <v-card color="yellow" tile flat>
                            <v-list>
          <template v-for="(item, index) in courses">
            <v-list-tile
              :key="index"
              @click=""
            >
              <v-list-tile-action>
                <v-icon> done </v-icon>
              </v-list-tile-action>
            
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
            </v-card>
              </v-flex>
              <v-flex xs12 sm6 md12 offset-md2 justify-start>
                <v-flex xs12 md12 offset-md2>
                  <h4 class="instagram mb-4"> Follow Us on Instagram</h4>
                </v-flex>
                <v-card color="blue" height="300">
              <v-layout row wrap>
               <v-flex
              v-for="n in 9"
              :key="n"
              xs3
              
              d-flex
            >
              <v-card elevation="10" flat tile class="d-flex">
                <v-img
                
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2 mx-auto zooming"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
            </v-layout>
                </v-card>
              </v-flex>
              <v-flex xs12 md12 sm6 offset-md2>
                 <v-list three-line>
          <template v-for="(item, index) in courses">
            <v-subheader
              v-if="item.title"
              :key="item.title"
            >
              {{ item.title }}
            </v-subheader>

            <v-divider
              v-else-if="true"
              :key="index"
              :inset="true"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click="events(item.id)"
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
        
        tab: null,
        items: [
          'Overview', 'Curriculum', 'Instructor'
        ],
          navgation: [
        {
          text: 'Home',
          disabled: true,
          href: '/'
        },
        {
          text: 'Contacts',
          disabled: true,
          href: 'contacts'
        },
      
      ],
       
    }
    },
    
    props:['id'],
 computed:{
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

</style>

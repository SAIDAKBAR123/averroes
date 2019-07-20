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

          <v-layout column wrap>
              <v-flex xs12 sm6 md12>
                    <h2 class="mt-4 pt-1 pr-1 pl-2 title_popins">Why buying a big house is a bad investment</h2>
              </v-flex>
              <v-flex xs12 sm6 md12>
                   <v-card color="blue" tile flat>
               <v-carousel height="300"   hide-controls>
                    <v-carousel-item
                    v-for="(item,i) in gallery"
                    :key="i"
                    :src="item.src"
                  
                    
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
          <v-card-text>{{ text }}</v-card-text>
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
          <template v-for="(item, index) in list">
            <v-list-tile
              v-if="item.action"
              :key="item.title"
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
          <template v-for="(item, index) in recentPost">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
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
          v-model="start"
          :type="type"
          :end="end"
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
        list: [
          {
            action: 'move_to_inbox',
            title: 'Business'
          },
          {
            action: 'send',
            title: 'Consulting'
          },
          {
            action: 'delete',
            title: 'Economy'
          },
          {
            action: 'report',
            title: 'Funding Trends'
          },
         
          {
            action: 'label',
            title: 'Our Gallery'
          },
          {
            action: 'label',
            title: 'Money'
          }
        ],
         gallery: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ],
        recentPost: [
          { header: 'RECENT POSTS' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Birthday gift',
            subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Recipe to try',
            subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
          }
        ],
        text: `COURSE DESCRIPTION
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

CERTIFICATION
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
      }
    }
  }
</script>

<style scoped>

</style>

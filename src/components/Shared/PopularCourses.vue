<template>
    <div class="space_middle">
        <v-layout>
             <v-flex dark justify-center md12 xs12 offset-(md)(3) >
                      <h1 class="title_beauty text-xs-center">Popular Courses</h1>
                       <div class="new_times text-xs-center px-5 mx-5"><p>
                           Perspiciatis unde omnis iste natus sit voluptatem accusantium dolorem <br>
laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                           </p></div>
                  </v-flex>
        </v-layout>
      <v-layout row wrap>
           <v-flex align-end  md3 sm6 xs12 v-for="item in courses" :key="item.icon">
      <v-hover>
    <v-card
     
      slot-scope="{ hover }"
      class="mx-auto my-auto"
      color="transparent"
      max-width="290"
    >
      <v-img
        :aspect-ratio="16/9"
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
             :src="item.avatar_inst"
             >
             </v-img>
        </v-avatar>
        </v-btn>
        <div class="text-xs-start title_playball black--text  mb-2">{{item.title}}</div>
        <h3 class="text-xs-start subheading
 font-weight-light grey--text mb-2">{{item.text }}</h3><v-spacer/>
       <h3 class="pb-0 mb-0 title_dance">{{item.instructor}}</h3>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions justify-center >
          <v-btn class="text-xs-center" round outline color="deep-blue lighten-4" >Continue</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</v-flex>

</v-layout>
<v-layout class="mt-5" justify-center align-center>
  <v-btn outline large round color="blue">View more...</v-btn>
</v-layout>
    </div>
</template>

<script>
export default {
 data () {
      return {
         courses:[
          {
          link:'http://www.nicdarkthemes.com/themes/education/wp/demo/design-school/wp-content/uploads/sites/4/2016/06/course7.jpg',
          title:'Photo Editing',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.',
          instructor:'Marketing & Advertising',
          avatar_inst:'http://www.nicdarkthemes.com/themes/education/wp/demo/design-school/wp-content/uploads/sites/4/2016/08/avatar-chef-3.jpg'
          },
           {
          link:'http://www.nicdarkthemes.com/themes/education/wp/demo/design-school/wp-content/uploads/sites/4/2016/06/course2.jpg',
          title:'Brand Identity',
          instructor:'Marketing & Advertising',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.',
          avatar_inst:'http://www.nicdarkthemes.com/themes/education/wp/demo/design-school/wp-content/uploads/sites/4/2016/08/avatar-chef-5.jpg'
          },
           {
          link:'http://www.nicdarkthemes.com/themes/education/wp/demo/design-school/wp-content/uploads/sites/4/2016/06/course1-740x416.jpg',
          title:'Web Design',
          instructor:'Marketing & Advertising',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.',
           avatar_inst:'http://www.nicdarkthemes.com/themes/education/wp/demo/design-school/wp-content/uploads/sites/4/2016/08/avatar-chef-6.jpg'
          },
           {
          link:'http://www.nicdarkthemes.com/themes/education/wp/demo/design-school/wp-content/uploads/sites/4/2016/06/course5.jpg',
          title:'Graphic Design',
          instructor:'Marketing & Advertising',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula. Nullam augue augue.',
           avatar_inst:'http://www.nicdarkthemes.com/themes/education/wp/demo/design-school/wp-content/uploads/sites/4/2016/08/avatar-chef-4.jpg'
          }
             
        ],
      
      }
    }
}
</script>

<style>

</style>

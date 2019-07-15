<template>
    <div>
           <v-parallax class="top-banner" height="300">
         
          <v-layout
            column
            align-center
            justify-center
            class="overlays white--text"
          >
    
            <h1 class="white--text mb-2 title_font text-xs-center">Course</h1>
            <div class="headline mb-3 text-xs-center">
                <v-breadcrumbs dark :items="items">
      <template v-slot:divider>
        <v-icon>keyboard_arrow_right</v-icon>
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
            <h2 class="title_beauty  text-xs-center">Professional solutions for your business.</h2>
            <div class="mr-4 title_dance  text-xs-center col"><p>We provide premium customer support and offer affiliate programs.</p>
             <hr class="deep-black accent-2 mt-0 d-inline-block mx-auto" style="width: 40%;">
            </div>
         
          </v-layout>
          </v-flex>
       
         </v-card>
        </v-layout>
    </div>
</template>

<script>
export default {
  data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: 'Courses',
          disabled: false,
          href: 'courses'
        },
        {
          text: 'state',
          disabled: true,
          href: ''
        }
      ]
    })
}
</script>

<style scoped>
.top-banner{
background-image: url('../assets/img/events_back.jpg');
background-size: cover;
}
</style>

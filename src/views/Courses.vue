<template>
    <div>
           <v-parallax class="top-banner" height="300">
         
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
    
            <h1 class="white--text mb-2 display-1 text-xs-center">Course</h1>
            <div class="headline mb-3 text-xs-center">
                <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>
            </div>
          
          </v-layout>
        </v-parallax>
        <v-container>
            <v-layout>
                <v-flex>
                    <h2>hello courses</h2>
                </v-flex>
            </v-layout>
        </v-container>
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

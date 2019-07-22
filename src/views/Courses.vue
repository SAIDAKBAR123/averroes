<template>
    <div>
           <v-parallax class="service" height="390">
         
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
       
        <v-courses/>
    </div>
</template>

<script>
export default {
  data: () => ({
      items: [
        {
          text: 'Home',
          disabled: true,
          href: '/'
        },
        {
          text: 'Courses',
          disabled: true,
          href: 'courses'
        }
      
      ]
    }),
 
}
</script>

<style scoped>

</style>

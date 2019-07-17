<template>
  <div class="about">
      <v-parallax class="top-banner" height="390">
         
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
    
            <h1 class="white--text mb-2 title_font text-xs-center">About Us</h1>
            <div class="headline mb-3 text-xs-center">
                <v-breadcrumbs dark :items="items">
      <template v-slot:divider>
        <v-icon>keyboard_arrow_right</v-icon>
      </template>
    </v-breadcrumbs>
            </div>
          
          </v-layout>
        </v-parallax>
        
  </div>
</template>
<script>
export default {
  data(){
    return{
       items: [
        {
          text: 'Home',
          disabled: true,
          href: '/'
        },
        {
          text: 'About',
          disabled: true,
          href: 'about'
        }
       
      ]
    }
  }
}
</script>

<style scoped>
.top-banner{
  background-image: url('../assets/img/about.jpg')
}
</style>


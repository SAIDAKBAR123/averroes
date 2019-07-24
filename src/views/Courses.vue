<template>
    <div>
           <v-parallax class="service" height="390">
         
          <v-layout
            column
            align-center
            justify-center
            class="overlays white--text"
          >
    
            <h1 class="white--text mb-2 title_font text-xs-center">Курсы</h1>
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
        <v-sub-footer/>

    </div>
</template>

<script>
export default {
  data: () => ({
      items: [
        {
          text: 'Главная',
          disabled: true,
          href: '/'
        },
        {
          text: 'Курсы',
          disabled: true,
          href: 'courses'
        }
      
      ]
    }),
 
}
</script>

<style scoped>

</style>

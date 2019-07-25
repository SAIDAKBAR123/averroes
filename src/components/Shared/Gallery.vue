<template>
    <div v-show="false" >
      <v-layout row wrap justify-center align-center>
          <v-flex  shrink  align-center >
            <v-card flat tile color="transparent">
                <v-flex xs12 sm12 md12>
               <v-layout
               dark
            column
          >
            <h1 class="title_beauty text-xs-center" style="color:#c7b3a2">Наша галерея</h1>

            <div class=" new_times p-4 col text-xs-center"><p class=" p-4">Посмотреть некоторые из самых успешных студентов и многое другое от наших специалистов, представленных в этой галерее.</p>
             <hr class=" grey darken-3 accent-2 mt-0 d-inline-block mx-auto" style="width: 7%;">
            </div>
         
          </v-layout>
          </v-flex>
            </v-card>
          </v-flex>
          <v-flex grow  align-center >
          
  <carousel-3d>
       
    <slide v-for="i in 5"  :key="i" :index="i">
   <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/500/300?image=${i * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
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
               </slide>
 
  </carousel-3d>

          </v-flex>

      </v-layout>
      
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

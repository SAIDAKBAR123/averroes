<template>
    <div class="mb-5 pb-5">
      <v-layout row wrap justify-center align-center>
          <v-flex  shrink  align-center >
            <v-card flat width="300">
                <v-flex xs12 sm12 md12>
               <v-layout
               dark
            column
          >
            <h1 class="title_beauty text-xs-center" style="color:#c7b3a2">Our Gallery</h1>

            <div class="mr-4 new_times ml-4 pr-1 col"><p>View some of the most successful projects and more by our specialists presented in this gallery.</p>
             <hr class="grey darken-3 accent-2 mt-0 d-inline-block mx-auto" style="width: 10%;">
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

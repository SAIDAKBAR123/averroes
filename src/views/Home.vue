<template>
<div>

  <v-carousel height="540"  reverse-transition="fade"
      transition="fadeOut">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  <v-card tile class="mb-5">
  <v-layout row wrap>
    <v-flex xs6 sm6>
      <v-card tile>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, voluptate a quae itaque veniam, dolores vitae nam quia sed debitis minus odio culpa, deserunt fugit? Rem quod maxime cum modi.</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs6 sm6>
       <v-card tile>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, voluptate a quae itaque veniam, dolores vitae nam quia sed debitis minus odio culpa, deserunt fugit? Rem quod maxime cum modi.</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout row wrap>

 <v-flex d-flex xs3  v-for="item in 4" :key="item">
          <v-card tile flat color="purple" dark>
            <v-card-title primary class="title">Lorem</v-card-title>
            <v-card-text class="px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis aperiam veritatis nobis amet, molestiae nisi, nesciunt rerum architecto nulla expedita in id impedit praesentium, adipisci mollitia. Nisi, asperiores exercitationem.</v-card-text>
          </v-card>
  </v-flex>

 
  </v-layout>
  </v-card>
<v-layout>
  <h1>ssdadasda</h1>
</v-layout>


</div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://img.freepik.com/free-photo/young-student-looking-camera-sitting-university_7502-1107.jpg?size=626&ext=jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2018/03/14/08/55/business-3224643__340.jpg'
          },
          {
            src: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/education4-650.jpeg?yKJu.SPOTMSwskwJTSiPGSPSit7gMJmt'
          }
        ]
      }
    }
  }
</script>
content_copy

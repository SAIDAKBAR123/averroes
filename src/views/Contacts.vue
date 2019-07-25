<template>
    <div>
             <v-parallax :src="require('@/assets/img/events_back.jpg')" height="390">
         
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
    
            <h1 class="white--text mb-2 title_font text-xs-center">Контакты</h1>
            <div class="headline mb-3 text-xs-center">
                  <v-breadcrumbs dark :items="items">
      <template v-slot:divider>
        <v-icon>keyboard_arrow_right</v-icon>
      </template>
    </v-breadcrumbs>
            </div>
          
          </v-layout>
        </v-parallax>
  
               <v-layout
               dark
            column
          >
            <h1 class="title_beauty pt-2 mt-5 text-xs-center" >Наше местоположение</h1>
          
            <div class="mr-4 new_times text-xs-center col"><p>Мы предоставляем премиум поддержку клиентов и предлагаем партнерские программы.</p>
             <hr class="grey darken-3 accent-2 mt-0 d-inline-block mx-auto" style="width: 10%;">
            </div>
         
          </v-layout>

<v-layout class="space_middle" justify-center row wrap>
  <v-flex md4 xs12 justify-start>
    <v-card flat>
  
      <v-card-text>
      
            <ul class="list-unstyled ml-2 mr-2 mb-0">
                <li>
                    <h5 class="title_mplus"><i style="color: grey; font-size:1.6rem;"  class="fas fa-map-marker-alt fa-2x pl-2"></i>  Узбекистан, город Ташкент, Чиланзар 7 квартал, улица Мукимия, 160 - Чиланзарский район Главная дорога Мукимия</h5>
                </li>

                <li>
                    <h5 class="title_mplus"><i  style="color: grey; font-size:1.6rem;"  class="fas fa-phone mt-4 fa-2x pl-2"></i> + 998 (99) 944 33 44</h5>
                </li>

                <li>
                    <h5 class="title_mplus"><i  style="color: grey; font-size:1.6rem;" class="fas fa-envelope mt-4 fa-2x pl-2"></i> averroesconsulting@gmail.com</h5>
                </li>
            </ul>
      
      </v-card-text>
    </v-card>
  </v-flex>
  <v-flex md4 xs12 justify-start>
        <y-map
  :coords="[41.294877250045,69.21974582265403]"
  zoom="14"
  style="width: 100%; height:330px "
  :cluster-options="{
    1: {clusterDisableClickZoom: true}
  }"
  :behaviors="['ruler']"
  
  :placemarks="placemarks"
  map-type="map"
 
>

    <y-mapMarker
      marker-id="1"
      marker-type="placemark"
      :coords="[41.294877250045,69.21974582265403]"
      hint-content="Averroes Consulting"
      :balloon="{header: 'header', body: 'body', footer: 'footer'}"
      :icon="{color: 'red', glyph: 'home'}"
      cluster-name="1"
    ></y-mapMarker>

</y-map>

</v-flex>
</v-layout>
    </div>
</template>

<script>
export default {
data(){
    return{
          placemarks: [
      {
        coords: [69.21974582265403,41.294877250045],
        properties: {}, // define properties here
        options: {}, // define options here
        clusterName: "1",
        balloonTemplate: '<div><p>Muqimiy Street, Tashkent, 160</p></div>',
        callbacks: { click: function() {} }
      }
    ],
      items: [
        {
          text: 'Главная',
          disabled: true,
          href: '/'
        },
        {
          text: 'Контакты',
          disabled: true,
          href: 'contacts'
        },
      
      ]
    }
}
}
</script>

<style>

</style>

<template>
    <div>
             <v-parallax class="contacts" height="390">
         
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
    
            <h1 class="white--text mb-2 title_font text-xs-center">Contacts</h1>
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
            <h1 class="title_beauty pt-2 mt-5 text-xs-center" >Our Location</h1>
          
            <div class="mr-4 new_times text-xs-center col"><p>We provide premium customer support and offer affiliate programs.</p>
             <hr class="grey darken-3 accent-2 mt-0 d-inline-block mx-auto" style="width: 10%;">
            </div>
         
          </v-layout>

<v-layout class="space_middle" justify-center row wrap>
  <v-flex md4 xs12 justify-start>
    <v-card flat>
      <v-card-title>
        <h1 class="title_playball">Our Location </h1>
      </v-card-title>
      <v-card-text>
      
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <h5 class="title_mplus">San Francisco, CA 94126, USA</h5>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <h5 class="title_mplus">+ 998 (99) 944 33 44</h5>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <h5 class="title_mplus">averroes@support.com</h5>
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
          text: 'Home',
          disabled: true,
          href: '/'
        },
        {
          text: 'Contacts',
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

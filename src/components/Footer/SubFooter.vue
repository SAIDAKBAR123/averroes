<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12 md6>
                <v-card flat color="rgb(30, 29, 32,0.98)" dark tile>
                       <y-map
  :coords="[41.294877250045,69.21974582265403]"
  zoom="14"
style="width:100%; height:10rem"
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
                </v-card>
            </v-flex>
            <v-flex xs12 md6 align-center>
                 <v-card flat color="rgb(30, 29, 32,0.98)" dark  tile height="100%">
                    <v-card-text>
                        <v-layout col wrap align-center justify-center>

                    <span class="pr-1 text-uppercase"> ПРИСОЕДИНЯЙТЕСЬ в НАШ ТЕЛЕГРАМ канал</span> <v-btn href="https://t.me/averroes_consulting" left  large color="blue" round flat outline><i class="fab fa-telegram-plane mr-2"></i>  Telegram</v-btn>
                     <span class="pr-1 text-uppercase">Присоединяйтесь к нашему INSTAGRAM каналу</span> <v-btn dark  color="pink lighten-1" href="http://instagram.com/averroes.consulting/"  large round flat outline><i class="fab fa-instagram mr-2"></i> Instagram</v-btn>
                  </v-layout>
                    </v-card-text>
                </v-card>
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
            ]
}
}
}
</script>

<style>
.sd{
color:rgba(30, 29, 32, 0.89);
}
</style>

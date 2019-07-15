<template>
    <div class="">
             <v-parallax class="contacts" height="300">
         
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

        <!--Section: Contact v.2-->
<section class="text-center mb-5 px-5 mx-5 pb-5" >

    <!--Section heading-->
    <h2 class="title_font text-center my-4">Send Us a Message</h2>
    <!--Section description-->
    <p class="text-center title_playball w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
<hr class="stylish-color accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 10%;">
    <div class="row">

        <!--Grid column-->
        <div class="col-md-12 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control">
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control">
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control">
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                <!--Grid row-->
            <div class="text-center">
                <v-btn justify-center round large outline color="green" dark>Leave  a Reply</v-btn>
            </div>
            </form>

            <div class="status"></div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
    
        <!--Grid column-->

    </div>

</section>
<!--Section: Contact v.2-->

        <y-map
  :coords="[41.294877250045,69.21974582265403]"
  zoom="14"
  style="width: 100%; height: 300px;"
  :cluster-options="{
    1: {clusterDisableClickZoom: false}
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
          disabled: false,
          href: '/'
        },
        {
          text: 'Contacts',
          disabled: false,
          href: 'contacts'
        },
      
      ]
    }
}
}
</script>

<style>

</style>

<template>
    <div style="background-color:#1c1b1f;">

  <!-- Footer Links -->
  <div class="container text-center text-md-left mt-5 pt-5">

    <!-- Grid row -->
    <div class="row mt-3">

      <!-- Grid column -->
      <div class=" white--text col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">

        <!-- Content -->
        <h5 class="white--text text-uppercase font-weight-bold">Averroes Consulting</h5>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
       
        <p>
         <v-icon dark>home</v-icon><span/> York, NY 10012, US</p>
        <p>
          <v-icon dark>email</v-icon><span/> info@example.com</p>
        <p>
          <v-icon dark>phone</v-icon><span/> + 01 234 567 88</p>
     

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-3 col-lg-2 col-xl-4 mx-auto mb-4">

        <!-- Links -->
        <h5 class=" white--text text-uppercase font-weight-bold">Services</h5>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>
          <a href="#!">Your Account</a>
        </p>
        <p>
          <a href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!">Shipping Rates</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4">

        <!-- Links -->
        <h5 class="white--text text-uppercase font-weight-bold">Contact form</h5>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
      <v-card tile flat color="transparent" dark>
        <form  class="dark">
    <v-text-field
     outline
      v-model="name"
      v-validate="'required|max:10'"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Your Name"
      data-vv-name="name"
      prepend-inner-icon="perm_identity"
      required
    ></v-text-field>
    <v-text-field
     outline
     color="blue"
      v-model="email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail address"
      data-vv-name="email"
      prepend-inner-icon="mail"
      required
    ></v-text-field>
     <v-text-field
     v-model="subject"
            outline
            label="Subject"
            prepend-inner-icon="subject"
            data-vv-name="subject"
          ></v-text-field>
     <v-textarea
          outline
          v-model="message"
          name="input-7-4"
          data-vv-name="mesaage"
          label="Outline textarea"
          value="your message here..."
        ></v-textarea>
    
    <v-btn large @click="submit" color="green" outline round>Send message
        <v-icon dark right>send</v-icon>
      </v-btn>
      
    
  </form>
  </v-card>
      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

  <!-- Copyright -->
  <div class="white--text footer-copyright text-center py-3"> {{ new Date().getFullYear() }} — <strong >Averroes Consulting</strong>

  </div>
  <!-- Copyright -->
     
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

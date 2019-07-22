<template >
    <div  width="100%" style="background-color:#1c1b1f;">

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
          <v-icon dark color="grey deep-darken 2">phone</v-icon><span/> + 01 234 567 88</p>
     

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
    data () {
      return {
      name: '',
      email: '',
      subject:'',
      message:'',
      address:
        {
          road:'Uzbekistan, Tashkent City ,Chilanzar 7 quarter, Muqimiy st, 160',
          tel:'(97) 770 99 25',
          contact_links:'info@averroes.uz'
      }
    ,
    dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      },
      icons: [
        'home',
        'mail',
        'event',
        'delete',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: false,
      variant: 'default',
    }
    },


    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
      mounted () {
      this.$validator.localize('en', this.dictionary)
    },
     methods: {
      submit () {
        this.$validator.validateAll()
      }
    }
  }

</script>

<style>

</style>

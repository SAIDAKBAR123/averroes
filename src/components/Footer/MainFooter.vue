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
        <hr class="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
       
        <p class="title_crilic a_hover">
      <v-icon dark>home</v-icon><span class="ml-1">Узбекистан, город Ташкент, Чиланзар 7 квартал, улица Мукимия, 160 - Чиланзарский район Главная дорога Мукимия</span></p>
        <p class="title_crilic a_hover">
          <v-icon dark>email</v-icon><span class="ml-1">averroesconsulting@gmail.com</span></p>
        <p class="title_crilic a_hover">
          <v-icon dark color="grey deep-darken 2">phone</v-icon><span class="ml-1"> + 998(97) 770-99-25</span></p>
     

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-3 col-lg-2 col-xl-4 mx-auto mb-4">

        <!-- Links -->
        <h5 class=" white--text text-uppercase font-weight-bold">услуги</h5>
        <hr class="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p class="title_crilic a_hover" v-for="(i,index) in uslugi" :key="index">
         <a class="a_hover" :href="'http://averroes.uz/#/services/'" target="_blank" rel="noopener noreferrer">{{i.title}}</a>
        
        </p>
      

      </div>

     <div class="col-md-3 col-lg-2 col-xl-4 mx-auto mb-4">

        <!-- Links -->
        <h5 class=" white--text text-uppercase font-weight-bold">Курсы</h5>
        <hr class="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p class="title_crilic a_hover" v-for="course in courses" :key="course.id">
         <a class="title_crilic a_hover" :href="'http://averroes.uz/#/courses/'+course.id" target="_blank" rel="noopener noreferrer">{{course.title}}</a>
        
        </p>
      

      </div>

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
        uslugi:[
         {
           title:'Разработка методологии',
        },
         {
            title: 'Учебная литература',
         },
         {
            title:'Стратегия образования',
         },
         {
           title:'Профессиональные курсы'
         }

        ],
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
      
    courses(){
        return this.$store.getters.loadedMeetups 
    },
  
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

<style scoped>
.a_hover{
  color: white;
  transition: transform .2s; 
}
.a_hover:hover{
  color:red;
 transform: scale(1.033);
}
</style>

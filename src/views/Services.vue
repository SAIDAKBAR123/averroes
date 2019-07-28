<template>
    <div>
            <v-parallax :src="require('@/assets/img/events_back.jpg')" height="390">
         
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
    
            <h1 class="white--text mb-2 title_font text-xs-center text-uppercase">услуги</h1>
            <div class="headline mb-3 text-xs-center">
                  <v-breadcrumbs dark :items="items">
      <template v-slot:divider>
        <v-icon>keyboard_arrow_right</v-icon>
      </template>
    </v-breadcrumbs>
            </div>
          
          </v-layout>
        </v-parallax>
        <v-layout  row wrap justify-center>
              <v-card flat  tile>
          <v-flex xs12 sm12 md12>
               <v-layout
               dark
            column
          >
            <h1 class="title_beauty p-2 mt-4 text-xs-center" >Предлагаемые услуги</h1>
      
             <hr class="deep-black accent-2 mt-0 d-inline-block mx-auto" style="width: 40%;">
            
          </v-layout>
          </v-flex>
       
         </v-card>
        </v-layout>
     <v-container>
          <v-layout class="space_middle" row wrap>
          <v-flex md4 lg6 xs12 sm4>
            <v-card width="520" height="100%" color="red">
              <v-img height="100%"  src="http://career.iresearchnet.com/wp-content/uploads/2014/06/Telephone-Operator.jpg">

              </v-img>
            </v-card>
          </v-flex>
          <v-flex md6 lg6 xs12 sm4>
            <v-card color="transparent" tile flat>
              
              <v-layout col wrap>
                  <v-flex xs12  data-aos="fade-up"  xs12 md12 v-for="i in def" :key="i.title">
                     <v-card dark color="grey lighten-5 m-2" class="white--text">
              <v-layout col wrap justify-center align-center>
                <v-flex xs12 md4 offset-xs3> 
                  <v-avatar class="m-3" size="110">
                  <v-img
                    :src="require('../assets/img/'+i.icon)"
                   
                    contain
                  ></v-img>
                  </v-avatar>
                </v-flex>
                <v-flex xs12 md10>
                  <v-card-title primary-title>
                    <div class="black--text">
                      <div class="headline">{{i.title}}</div>
                      <div class="body">❖ {{i.pro1}}</div>
                      <div  class="body">❖ {{i.pro2}}</div>
                      <div  class="body">❖ {{i.pro3}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              
             
            </v-card>
                  </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
     </v-container>
         <v-sub-footer/>
    </div>
</template>

<script>
export default {
data(){
    return{
          items: [
        {
          text: 'Главная',
          disabled: true,
          href: '/'
        },
        {
          text: 'услуги',
          disabled: true,
          href: 'services'
        },
      
      ],
      def:[
        {
          title:'ACCA courses',
          pro1:'Basics and advanced understanding of IFRS',
          pro2:'Application of Financial and Managerial Accounting concepts in practice',
          pro3:'Excel for financial managers',
          icon:'icon4.png'
        },
        {
          title:'Visa support',
          pro1:'Documentation support',
          pro2:'Interview preparation',
          pro3:'Personal travel manager',
           icon:'icon3.png'
        },
        {
          title:'Educational consultancy',
          pro1:'Study abroad',
          pro2:'Course Design development',
          pro3:'Educational strategy',
           icon:'icon2.png'
        },
        {
          title:'Professional courses',
          pro1:'Financial Management',
          pro2:'Excel for professional use + Business Analytics',
          pro3:'English courses',
           icon:'icon1.png'
        }

      ]
    }
}
}
</script>

<style>

</style>

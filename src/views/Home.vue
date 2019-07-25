<template>
<div >

 <v-carousel  :height="totalHeight"  reverse-transition="fade"
      transition="fadeIn"
      delimiter-icon
      hide-delimiters
      next-icon="navigate_next"
      prev-icon="navigate_before"
      >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    <div class="flex-center">
             <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
           
          
            <h1 class="title_font white--text mb-2  text-xs-center">{{item.text}}</h1>
            <div class="title_playball mb-3 text-xs-center">Preparing your money is a daunting challenge for today's investors.</div>
         
          </v-layout>
        </div>
    </v-carousel-item>
   
  </v-carousel>

  <v-card width="100%" flat tile class=" space_middle">
  <v-layout  row wrap>
    <v-flex md12 sm12 xs12 offset-(xs)(1)>
       <v-card flat  tile>
          <v-flex xs12 sm12 md12>
               <v-layout
               dark
            column
          >
            <h1 class="title_beauty p-2 text-xs-center" >We are always ahead</h1>
           
            <div class="mr-4 new_times text-xs-center col"><p>We provide premium customer support and offer affiliate programs.</p>
             <hr class="grey darken-3 accent-2 mt-0 d-inline-block mx-auto" style="width: 10%;">
            </div>
         
          </v-layout>
          </v-flex>
       
         </v-card>
    </v-flex>
    </v-layout>
    <v-layout row wrap justify-center align-center>
    <v-flex  md4 sm6 xs12 v-for="item in intro" :key="item.icon">
      
        <v-card  flat  tile >
         <v-card-title dark primary class="justify-center icon_big title"><i  :class="item.icon"></i></v-card-title>
            <v-card-title dark primary class="justify-center icons title_font">{{item.title}}</v-card-title>
          <v-card-text class="text-center px-5 title_mplus">{{item.text}}</v-card-text>
        </v-card>

    </v-flex>
    </v-layout>
  

  <v-layout align-center justify-center row wrap>
    <v-flex md3 xs12 lg3 sm6>
       <v-card  height="300 " tile flat color="rgb(233, 231, 231)" dark >
            <v-card-title dark primary class="justify-center icons title"><i style="color:grey" class="fas fa-university"></i></v-card-title>
            <h4 class="black--text text-xs-center title_font">Investment Banking</h4>
            <v-card-text dark class="black--text text-xs-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis aperiam veritatis nobis amet, molestiae nisi, nesciunt rerum architecto nulla expedita in id impedit praesentium, adipisci mollitia. Nisi, asperiores exercitationem.</v-card-text>
          </v-card>
    </v-flex>
 <v-flex md3 xs12 lg3 sm6 v-for="item  in color" :key="item.color"  >
          <v-card  height="300 " tile flat :color="item.color" dark >
            <v-card-title dark primary class="justify-center icons title"><i :style="'color:'+item.icon_color" :class="item.icon"></i></v-card-title>
            <h4 class="text-xs-center title_font">{{item.title}}</h4>
            <v-card-text dark class=" text-xs-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis aperiam veritatis nobis amet, molestiae nisi, nesciunt rerum architecto nulla expedita in id impedit praesentium, adipisci mollitia. Nisi, asperiores exercitationem.</v-card-text>
          </v-card>
  </v-flex>
  </v-layout>
  </v-card>
  
  <!--team list-->

 <team-list/>

<!--Opinions about averroes -->
<v-layout>
<v-flex>
  
</v-flex>
</v-layout>
<!-------Partner List ------>

  <partner-list/>
<v-courses></v-courses>
<v-gallery/>
<vue-instagram/>
<v-sub-footer/>
</div>
</template>

<script>
import TeamList from '../components/Shared/TeamList.vue'
import PartnerList from '../components/Shared/PartnerList.vue'
import VueInstagram from '../components/Shared/VueInstagram.vue'

  export default {
    computed:{
    totalHeight(){
      let x =  screen.availHeight 
      x=parseInt(x)-100;
      console.log(x)
      return x 
   }
  },
    components:{
TeamList,
PartnerList,
VueInstagram,

    },
    
    data () {
      return {
       
        color:[
          {
          icon:'fas fa-funnel-dollar',
          color:'#c7b3a2',
           title:'Sales & Trading',
           icon_color:'white'
          },
          {
            icon:'fas fa-business-time',
            color:'#2b2c30',
             title:'Investment Management',
             icon_color:'white'
            },
          {
            icon:'fas fa-money-check-alt',
            color:'#222326',
            title:'Market Research',
            icon_color:'white'
            }
        ],

        items: [
          {
            src: 'http://invetex.themerex.net/wp-content/uploads/2016/04/slider_1.jpg',
            text:'The Best Business Support'
                },
                     {        
            src: 'http://invetex.themerex.net/wp-content/uploads/2016/04/slider_2.jpg',
             text:'The Investment on Time'
            },
          {
              src: 'http://invetex.themerex.net/wp-content/uploads/2016/04/slider_3.jpg',
               text:'We have a Talanted Students'
          },
          {
            src: 'http://invetex.themerex.net/wp-content/uploads/2016/04/slider_1.jpg',
             text:'Consulting & Investment'
          }
        ],
        intro:[
          {
          icon:'fas fa-coins',
          title:'Market Forecasting',
          text:'Market-leading experience and services Internal accounting & sales data, in addition to external market and economic indicators'
          },
              {
          icon:'fas fa-chart-bar',
          title:'Financial Modeling',
          text:'Market-leading experience and services Internal accounting & sales data, in addition to external market and economic indicators'
         },
              {
          icon:'fas fa-stopwatch',
          title:'Financial Analysis',
          text:'Market-leading experience and services Internal accounting & sales data, in addition to external market and economic indicators'
          }
        ]
      }
      }
      }
</script>


<style scoped>

.icons i{
  font-size: 3rem;

}
.icon_big i{
 
  color:rgb(211, 211, 211);
font-size: 5rem;
}

</style>


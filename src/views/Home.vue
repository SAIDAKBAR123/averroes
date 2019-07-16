<template>
<div >

  <v-carousel :height="totalHeight"  reverse-transition="fade"
      transition="fadeIn"
      delimiter-icon
      hide-delimiters
      >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    <div class="mask flex-center rgba-black-strong">
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

  <v-card flat tile class="mt-5 mb-5">
  <v-layout  row wrap>
    <v-flex md12 sm12 xs12 offset-(xs)(1)>
       <v-card flat  tile>
          <v-flex xs12 sm12 md12>
               <v-layout
               dark
            column
          >
            <h1 class="title_beauty p-2 text-xs-center" style="color:#c7b3a2">We are always ahead</h1>
            <h2 class="title_beauty  text-xs-center">Professional solutions for your business.</h2>
            <div class="mr-4 title_dance  text-xs-center col"><p>We provide premium customer support and offer affiliate programs.</p>
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
<v-layout>
 <team-list/>
</v-layout>
<!--Opinions about averroes -->
<v-layout>
<v-flex>
  
</v-flex>
</v-layout>
<!-------Partner List ------>

  <partner-list/>

</div>
</template>

<script>
import TeamList from '../components/Shared/TeamList.vue'
import PartnerList from '../components/Shared/PartnerList.vue'
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
            src: 'https://img.freepik.com/free-photo/young-student-looking-camera-sitting-university_7502-1107.jpg?size=626&ext=jpg',
             text:'The Investment on Time'
            },
          {
              src: 'https://cdn.pixabay.com/photo/2018/03/14/08/55/business-3224643__340.jpg',
               text:'We have a Talanted Students'
          },
          {
            src: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/education4-650.jpeg?yKJu.SPOTMSwskwJTSiPGSPSit7gMJmt',
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


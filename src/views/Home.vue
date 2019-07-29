<template>
<div>

 <v-carousel :height="totalHeight"  reverse-transition="fade"
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
    <v-flex md12 sm12 xs12 >
       <v-card color="transparent" flat  tile>
          <v-flex xs12 sm12 md12 >
               <v-layout
               dark
            column
          >
            <h1 class="title_beauty p-2 text-xs-center" >Что вы знаете о нас?</h1>
           
            <div class="mr-4 new_times font-weight-regular text-xs-center col"><p class="mx-5 px-5">Новые навыки и знания могут зажечь жизнь перемен. Averroes Consulting разработала и внедрила программы в сфере образования
  и экономические возможности, которые предоставляют изменяющие жизнь возможности тем, кто в них больше всего нуждается.</p>
             <hr class="grey darken-3 accent-2 mt-0 d-inline-block mx-auto" style="width: 7%;">
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
  

  <v-layout   align-content-center justify-center row wrap>
    <v-flex align-content-center md3 xs12 lg3 sm6>
       <v-card  height="400 " tile flat color="rgb(233, 231, 231)" dark >
            <v-card-title dark primary class="pt-5 justify-center icons title"><i style="color:grey" class="fas fa-bullseye"></i></v-card-title>
            <h4 class="black--text text-xs-center title_font p-1">Нацеленность на результат</h4>
            <v-card-text dark class="black--text text-xs-center">В качестве поставщиков доступного образования для масс наша воля заключается в том, чтобы обеспечить тем, кто стремится к лучшему будущему, средствами и результатами, которые они заслуживают</v-card-text>
          </v-card>
    </v-flex>
 <v-flex align-content-center md3 xs12 lg3 sm6 v-for="item  in color" :key="item.color"  >
          <v-card  height="400 " tile flat :color="item.color" dark >
            <v-card-title dark primary class="pt-5 justify-center icons title"><i :style="'color:'+item.icon_color" :class="item.icon"></i></v-card-title>
            <h4 class="text-xs-center title_font p-1">{{item.heading}}</h4>
            <v-card-text dark class=" text-xs-center">{{item.description}}</v-card-text>
          </v-card>
  </v-flex>
  </v-layout>
  </v-card>
  
  <!--team list-->


<!--Opinions about averroes -->
<v-layout>
<v-flex>
  
</v-flex>
</v-layout>
<!-------Partner List ------>

<v-courses></v-courses>

<v-gallery/>

 
<vue-instagram/>
 <partner-list/>
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
          icon:'fas fa-hands-helping',
          color:'#c7b3a2',
           title:'Sales & Trading',
           icon_color:'white',
             heading:'Убеждение',
          description:'Мы считаем что нельзя научить человека без указания путей рационального мышления, который состоит из риторической, диалектической и демонстративных методов последовательного и убедительного хода мыслей. Наша цель в том чтобы определить путь к саморазвитию через тяжелый труд и взращивание привычки к совершенству, которые сформируют личность.'
        
          },
          {
            icon:'fas fa-users',
            color:'#2b2c30',
             title:'Investment Management',
             icon_color:'white',
              heading:'Люди',
          description:'Averroes не только предлагает отличный сервис для своих партнеров, но и фокусируется на саморазвитии людей внутри компании благодаря постоянному поощрению, мотивации и поддержке, чтобы они могли расти лично и становиться все более конкурентоспособными в глобальном рынке рабочей силы.'
        
            },
          {
            icon:'fas fa-book-open',
            color:'#222326',
            title:'Market Research',
            icon_color:'white',
             heading:'Просвещение',
          description:'Люди, которые приходят к нам в поисках конкретных знаний, должны уйти с чувством вновь обретенной мудрости, исходящей от окружающей среды и инновационной учебной программы, которая заложит основу для непрерывного саморазвития и совершенствования.'
        
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
          icon:'fas fa-graduation-cap',
          title:'',
          text:'Образовательный опыт в атмосфере схожей Университетской по доступной для основного населения ценам;'
          },
              {
          icon:'fas fa-chart-line',
          title:'',
          text:'Увеличение экономического роста и сокращение масштабов нищеты может быть достигнуто за счет предоставления выдающейся образовательной платформы, которая подходит даже для экономически неблагополучных слоев населения в странах;'
         },
              {
          icon:'far fa-handshake',
          title:'',
          text:'Личная ответственность за успеваемость ученика и установление его мышления как глобального гражданина, который стремится создать позитивные изменения в социуме.'
          }
        ],
         about:[
       
         
         {
           iconic:'edu3.png',
          color: 'cyan ',
          icon: 'fas fa-bullseye',
          heading:'Нацеленность на результат',
          description:'В качестве поставщиков доступного образования для масс наша воля заключается в том, чтобы обеспечить тем, кто стремится к лучшему будущему, средствами и результатами, которые они заслуживают'
        }]
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


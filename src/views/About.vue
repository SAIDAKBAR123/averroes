<template>
  <div class="about">
   
     <v-parallax :src="require('@/assets/img/events_back.jpg')"   height="390">
         
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
    
            <h1 class="white--text mb-2 title_font text-xs-center">О нас</h1>
            <div class="headline mb-3 text-xs-center">
                <v-breadcrumbs dark :items="items">
      <template v-slot:divider>
        <v-icon>keyboard_arrow_right</v-icon>
      </template>
    </v-breadcrumbs>
            </div>
          
          </v-layout>
        </v-parallax>
        
        <v-layout row wrap class="space_middle">
             <v-flex xs12 sm4 md5 >
            <div class=" ">
              <h2 class="title_beauty text-xs-center"> Миссия</h2>
             <v-layout px-4 my-5 column>
              <p class="new_times_des py-10 px-5">
               Миссия Averroes Consulting состоит в том, чтобы стереть разрыв в возможностях, связанный с финансовыми трудностями молодежи в Узбекистане, благодаря инновационным методам обучения, которые помогают сократить время для абсолютного освоения предметов и в то же время обеспечить доступное образование. Averroes стремится реализовать свои основные ценности и цели благодаря своим корпоративным обещаниям
                </p>
               <hr class="grey darken-1 accent-2 mt-0 d-inline-block mx-auto" style="width: 10%;">
             </v-layout>
            
            </div>
          </v-flex>
         <v-flex   xs12 sm4 md2 v-for="i in descriptions" :key="i.subtitle">

            <div data-aos="flip-right"  class="text-xs-center">
              <v-card dark color="red darken-1" class="elevation-10 mt-5 mr-3">
                <div class="pt-4" > 
                <i style="font-size:4rem; color:#fff" :class="i.icon"></i>
               </div>
                <v-card-text>
                  <p class="title_mplus">{{i.subtitle}}</p>
                   </v-card-text>
              </v-card>
            </div>
             </v-flex>
        
        </v-layout>
          <v-flex xs12 sm12 md12 >
              <h1 class="title_beauty text-xs-center mb-3 pb-2">Главные ценности</h1>
          </v-flex>
       <v-container>
          <v-layout class="my-5"  row wrap>
        
            <v-flex  xs12 md6  v-for="i in about" :key="i.iconic">
              <v-card  class="mx-auto" height="23rem" data-aos="zoom-out-down"   dark tile color="red darken-1">
                <div  class="elevation-10" style="about_page">
                 
                  <p class="text-xs-center title_crilic_big">{{i.heading}}</p>
                  
                </div>
                <v-card-text>
                   
                  <div class=" photo text-xs-center">
        <i id="icon_main" :class="i.iconic+' '"></i>
                <p class="title_fonts  m-2 p-3">{{i.description}}</p>
                  </div>
                 </v-card-text>
              </v-card>

            </v-flex>
        </v-layout>
       </v-container>
      <team-list/> 
        <partner-list/>
        <v-sub-footer/>
  </div>
</template>
<script>
import PartnerList from '../components/Shared/PartnerList.vue'
import TeamList from '../components/Shared/TeamList.vue'
export default {
  components:{
    TeamList,
    PartnerList,
  },
  data(){
    return{
       items: [
        {
          text: 'Главная',
          disabled: true,
          href: '/'
        },
        {
          text: 'О нас',
          disabled: true,
          href: 'about'
        }
       
      ],
        descriptions:[
        {
        
      subtitle:'❖	Образовательный опыт в атмосфере схожей Университетской по доступной для основного населения ценам;',
      color:'blue lighten-4',
      icon:'fas fa-user-graduate',
         },
         { 
           subtitle:'❖	Увеличение экономического роста и сокращение масштабов нищеты может быть достигнуто за счет предоставления выдающейся образовательной платформы, которая подходит даже для экономически неблагополучных слоев населения в странах',
               color:'orange lighten-4',
                icon:'fas fa-user-graduate'
         },
         {
           subtitle:'❖	Личная ответственность за успеваемость ученика и установление его мышления как глобального гражданина, который стремится создать позитивные изменения в социуме.',
               color:'brown lighten-4',
                icon:'fas fa-user-graduate'
        }
      ],
   
        about:[
        {
           iconic:'fas fa-hands-helping',
          timer:3300,
          icon: 'mdi-buffer',
          heading:'Убеждение',
          description:'Мы считаем что нельзя научить человека без указания путей рационального мышления, который состоит из риторической, диалектической и демонстративных методов последовательного и убедительного хода мыслей. Наша цель в том чтобы определить путь к саморазвитию через тяжелый труд и взращивание привычки к совершенству.'
          
        },
          {
          iconic:'fas fa-users',
          color: 'brown darken-1',
          timer:4300,
          icon: 'mdi-star',
          heading:'Люди',
          description:'Averroes не только предлагает отличный сервис для своих партнеров, но и фокусируется на саморазвитии людей внутри компании благодаря постоянному поощрению, мотивации и поддержке, чтобы они могли расти лично и становиться все более конкурентоспособными в глобальном рынке рабочей силы.'
        },
        {
          iconic:'fas fa-book-open',
          color: 'blue-grey darken-1',
          icon: 'mdi-book-variant',
          timer:5300,
          heading:'Просвещение',
          description:'Люди, которые приходят к нам в поисках конкретных знаний, должны уйти с чувством вновь обретенной мудрости, исходящей от окружающей среды и инновационной учебной программы, которая заложит основу для непрерывного саморазвития и совершенствования.'
        },  {
           iconic:'fas fa-bullseye',
          color: 'cyan ',
          icon: 'mdi-airballoon',
          timer:6300,
          heading:'Нацеленность на результат',
          description:'В качестве поставщиков доступного образования для масс наша воля заключается в том, чтобы обеспечить тем, кто стремится к лучшему будущему, средствами и результатами, которые они заслуживают'
        }]
    }
  }
}
</script>

<style scoped>
.top-banner{
  background-image: url('../assets/img/about.jpg');
  color:rgba(223, 223, 223, 0.548);
}
.about_page{
  background-color:rgba(44, 202, 250, 0.692);
   height:3rem;
    width:190px;

}
.photo{
  z-index: 10;
}
#icon_main{
  font-size:4rem;
   color:rgba(255, 253, 253, 0.774); 
   align-content: center; 
  position: relative;
}
.title_fonts{
   font-family: 'Comfortaa', cursive;
   font-size: 1.1rem;
}
</style>


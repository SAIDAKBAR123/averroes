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
               class="my-4"
               dark
            column
          >
            <h1 class="title_beauty  text-xs-center" >Предлагаемые услуги</h1>
      
             <hr class="black accent-2 mb-4 d-inline-block mx-auto" style="width: 20%; height:1px;">
            
          </v-layout>
          </v-flex>
       
         </v-card>
        </v-layout>

       <!--   <v-layout row wrap>
          <v-flex md6  xs12 sm12>
            <v-card flat width="520" height="100%" color="transparent">
              <v-img tile flat height="100%"  src="http://career.iresearchnet.com/wp-content/uploads/2014/06/Telephone-Operator.jpg">
                  <div class="overlay">
                     <p class="quote title_crilic">&#8220;{{des }} &#8221;</p> 
                     <div class="col">
                       <p class="title_crilic ml-4 p-3" v-for="(service,i) in services" :key="i" ><v-icon>done_all</v-icon> {{service.title}}</p>
                     </div>
                  </div>
              </v-img>
            </v-card>
          </v-flex>
          <v-flex md6  xs12 sm12>
            <v-card flat width="520" height="100%" color="transparent">
              <v-img tile flat height="100%"  src="http://career.iresearchnet.com/wp-content/uploads/2014/06/Telephone-Operator.jpg">
                  <div class="overlay">
                     <p class="quote title_crilic">&#8220;{{des }} &#8221;</p> 
                     <div class="col">
                       <p class="title_crilic ml-4 p-3" v-for="(service,i) in services" :key="i" ><v-icon>done_all</v-icon> {{service.title}}</p>
                     </div>
                  </div>
              </v-img>
            </v-card>
          </v-flex>
        
        </v-layout>-->
           <v-parallax  :src="require('@/assets/img/img_mirror1.png')">
         <v-layout class="mt-5" row wrap>
             <v-flex md6  xs12 sm12>
               <h1 class="title_beauty white--text text-xs-center" >Averroes Consulting
                 <br>
                   <hr class="white accent-2 mt-0 d-inline-block mx-auto" style="width: 10%;">
                  </h1>
                
             <p class="quote white--text ml-4 p-3 pt-0" ><span style="font-size:40pt;">п</span>{{des}}</p>
          </v-flex>
             <v-flex md6  xs12 sm12>
            <v-card flat width="100%" height="100%" color="transparent">
              <p class="title_crilic white--text ml-4 p-3" v-for="(service,i) in services" :key="i" ><v-icon dark>subdirectory_arrow_right</v-icon> {{service.title}}</p>
                 
            </v-card>
          </v-flex>
         </v-layout>
        
        </v-parallax>
  
      <v-layout class="my-4" row wrap>
          <v-flex xs12 md12 sm12>
             <h1 class="title_beauty p-2 mt-1 text-xs-center" >Учебная литература <br>
               <hr class="black accent-2 mb-4 d-inline-block mx-auto" style="width:10%; height:1px;">
            
             </h1>
              
          </v-flex>
      </v-layout>
 
 <v-parallax  :src="require('@/assets/img/img_mirror.png')" height="600" >
         <v-layout class="my-5" row wrap>
             
             <v-flex md6  xs12 sm12 order-xs2 order-md1>
            <v-card justify-center align-center flat  color="transparent">
            <!--  <p class="title_crilic white--text ml-4 p-3" v-for="(service,i) in services2" :key="i" ><v-icon dark>{{service.icon}}</v-icon> {{service.title}}</p>-->
                 <v-layout class="pl-5 pr-5 " justify-center align-center row wrap fill-height>
                 <v-flex xs6 md6 sm6   v-for="service in services2" :key="service.title">
                     <p  class="text-xs-center p-2 mt-2"><v-icon size="50" dark >{{service.icon}}</v-icon></p> 
                      
                    <v-card height="65" justify-center align-center class="m-1 overlay"  flat>
                    
                     <v-layout row wrap align-center justify-center>
                         <v-card-text >
                        <p class="title_crilic  icon_title text-xs-center white--text" >{{service.title}}</p>
                      </v-card-text>
                     </v-layout>
                    </v-card>
                 </v-flex>
                 </v-layout>
            </v-card>
          </v-flex>
          <v-flex md6  xs12 sm12 order-xs1 order-md2>
               <h1 class="title_beauty white--text text-xs-center" >Averroes Consulting
                 <br>
                   <hr class="white accent-2 mt-0 d-inline-block mx-auto" style="width: 10%;">
                  </h1>
                
             <p class="quote text-xs-end white--text ml-4 p-3 pt-0" ><span style="font-size:40pt;">В</span>{{des2}}</p>
          </v-flex>
         </v-layout>
        
</v-parallax>
  
<partner-list/>
         <v-sub-footer/>
    </div>
</template>

<script>
import PartnerList from '../components/Shared/PartnerList.vue'
export default {
  components:{
    PartnerList,
  },
data(){
    return{
   
            des:'омогает образовательным учреждениям (в том числе университетам, высшим учебным заведениям и частным образовательным центрам) в разработке методологии проведения курсов. Разработка методологии будет состоять из следующего',
            des2:'ыступая в качестве эксклюзивных партнеров Лондонской Школы Бизнеса и Финансов, мы предоставляем дистрибьюторские скидки, которые мы предлагаем на следующих онлайн-образовательных материалах',
            des3:`Мы консультируем как и образовательные учреждения, так и частные лица о стратегии изучению нового курса или материала. Мы разрабатываем стратегию на основе графика и результатов обучения, которые достижимы и измеримы. Стратегия образования дополняется соответствующими учебными материалами, соответствующей методологией в сочетании с диаграммой Ганнта, измеряющей крайний срок распределения времени по темам и его освоения (известный как планировщик стратегии). Планировщик стратегии описывает каждую тему, которую необходимо освоить, время, которое необходимо выделить для материалов (будь то видео или материалы для чтения), и время для выполнения практических заданий, обеспечивающих освоение темы. Далее, исходя из дня начала курса, выделяется график для каждой темы. Планировщик стратегии будет использовать показатели, которые контролируют выполнение заданий (чтение, практика и т. Д.) и информирует студента и высшее учебное заведение о прогресса учёбы.
`
     ,
     services:[
       {
         title:'Выявление результатов обучения'
       },
        {
         title:'Внедрение образовательных стратегий в целях разработки инструментов для измерения достижения результатов'
       },
        {
         title:'Создание системы оценки курса, используя технологические инструменты'
       },
        {
         title:'Контролирование системы оценки курса путем создания учебной программы курса'
       },
        {
         title:'Установление ключевых критериев оценки эффективности курса'
       }
     ],
      services2:[
       {
         title:'Курсы',
         icon:'library_books'
       },
        {
         title:'Книги',
         icon:'local_library'
       },
        {
         title:'Медиа Материалы',
         icon:'video_library'
       },
        {
         title:'Методологии',
         icon:'assignment'
       },
        {
         title:'Методические рекомендации',
         icon:'school'
       },
       {
         title:'Учебные планы',
         icon:'insert_chart_outlined'
       }
     ],
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
      
    }
}
}
</script>

<style scoped>
.overlay{
background-color: rgba(187, 186, 186, 0.404);

}
.quote{
  line-height: 2.5rem;
  font-family: 'Roboto',sans-serif;
 font-weight: 400;
  font-size: 2rem;
  padding: 5%;
  margin:5px;
  justify-content: center;
}
.icon_title{
  font-size:1.3rem;
 
}
</style>

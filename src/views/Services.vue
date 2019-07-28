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
          <v-layout row wrap>
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
        
        </v-layout>
        
     </v-container>
         <v-sub-footer/>
    </div>
</template>

<script>
export default {
data(){
    return{
   
            des:'Averroes Consulting помогает образовательным учреждениям (в том числе университетам, высшим учебным заведениям и частным образовательным центрам) в разработке методологии проведения курсов. Разработка методологии будет состоять из следующего'
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
background-color: rgba(229, 233, 233, 0.76);
height: 100%;
}
.quote{
  line-height: 24px;
  letter-spacing: 1px;
  color: rgb(48, 48, 48);
 font-weight: 400;
  font-size: 1.2rem;
  padding-top: 5%;
  padding-left: 8%;
   padding-right: 8%;
  margin:5px;
  justify-content: center;
  
}

</style>

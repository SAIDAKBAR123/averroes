<template>
  <div class="about">
      <v-parallax class="top-banner" height="390">
         
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
    
            <h1 class="white--text mb-2 title_font text-xs-center">About Us</h1>
            <div class="headline mb-3 text-xs-center">
                <v-breadcrumbs dark :items="items">
      <template v-slot:divider>
        <v-icon>keyboard_arrow_right</v-icon>
      </template>
    </v-breadcrumbs>
            </div>
          
          </v-layout>
        </v-parallax>
        <v-layout row wrap>
             <v-flex xs12 sm4 md12 class="my-3">
            <div class="text-xs-center ">
              <h2 class="title_beauty"> Mission Statement</h2>
             <v-layout px-4 my-5 column>
              <p class="new_times_des py-10 px-5">
                The mission of Averroes study centre is to erase the opportunity gap, arising from financial constraints of the youth in Uzbekistan, through innovative learning techniques that help to decrease time for absolute mastering of subjects and at the same time provide affordable education. Averroes is committed to deliver on its core values and goals through its Corporate Promise 
              </p>
               <hr class="grey darken-1 accent-2 mt-0 d-inline-block mx-auto" style="width: 10%;">
             </v-layout>
            
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap align-center justify-center>
           <v-flex xs12 sm6 md4 shrink >
            <div data-aos="fade-up" >
              <v-card flat >
              
                <v-card-text>
                <v-img width="400" :src="require('../assets/img/target.png')"></v-img>
                 </v-card-text>
              </v-card>
            </div>
             </v-flex>
         
          <v-flex xs12 grow sm6 md2 v-for="i in descriptions" :key="i.subtitle">
            <div data-aos="flip-right" class="text-xs-center ">
              <v-card :color="i.color" class="elevation-10">
                <div class="pt-4"> 
                <i style="font-size:4rem; color:#fff" :class="i.icon"></i>
               </div>
                <v-card-text>
                  <p class="title_mplus">{{i.subtitle}}</p>
                   </v-card-text>
              </v-card>
            </div>
             </v-flex>
        </v-layout>
        <v-layout class="my-5"  row wrap>
            <v-flex  xs12 md3 v-for="i in about" :key="i.iconic">
              <v-card data-aos="fade-up" data-aos-duration="4000" dark tile :color="i.color">
                <div  class="elevation-10" style="about_page">
                  <p class="text-xs-center title_dance_big">{{i.heading}}</p>
                </div>
                <v-card-text>
                <p class="title_font pl-1 pr-1">{{i.description}}</p>
                 </v-card-text>
              </v-card>
            </v-flex>
        </v-layout>
      <team-list/> 
        <partner-list/>
        
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
          text: 'Home',
          disabled: true,
          href: '/'
        },
        {
          text: 'About',
          disabled: true,
          href: 'about'
        }
       
      ],
        descriptions:[
        {
        
      subtitle:'University-like atmosphere of learning experience at affordable prices for the general population',
      color:'blue lighten-4',
      icon:'fas fa-user-graduate',
         },
         { 
           subtitle:'Increase in economic growth and reduction in poverty can be achieved through provision of an outstanding education platform, that is suitable even for the economically disadvantaged segment of population in the countries of operation',
               color:'orange lighten-4',
                icon:'fas fa-user-graduate'
         },
         {
           subtitle:'Personal accountability for a student’s performance and setting his mindset as a global citizen, who is committed to create a positive change in the socium',
               color:'brown lighten-4',
                icon:'fas fa-user-graduate'
        }
      ],
   
        about:[
        {
           iconic:'edu4.png',
          color: 'purple darken-2',
          icon: 'mdi-buffer',
          heading:'Persuasion',
          description:'We believe that one cannot be taught without being shown the way of rational thinking, that consists of rhetorical, dialectical and demonstrative methods of consistent and persuasive reasoning. It is our aim to define a pathway towards self-development through hard work and nurturing the habit towards excellence that will mold one’s personality'
          
        },
          {
          iconic:'edu1.png',
          color: 'deep-purple darken-1',
          icon: 'mdi-star',
          heading:'People',
          description:'Averroes is not only about providing an outstanding service for its partners but also focusing on the self-development of the people within the company through constant encouragement, motivation and support in order for them to grow personally and become more and more competitive in the global labor market.'
        },
        {
          iconic:'edu2.png',
          color: 'light-blue darken-2',
          icon: 'mdi-book-variant',
          heading:'Enlightenment',
          description:'People who come to us seeking specific knowledge should leave with a sense of newly acquired wisdom delivered by the environment and innovative curriculum, which will lay foundation for continuous self-development and perfection.'
        },  {
           iconic:'edu3.png',
          color: 'cyan ',
          icon: 'mdi-airballoon',
          heading:'Results-Oriented',
          description:'As providers of affordable education for masses, our will is to enable the ones who strive for a better future with the means and results they are righteous to have.'
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
</style>


<template>
    <div  class="space_middle">
        <v-layout justify-center align-center row wrap>
                 <v-flex dark justify-center md12 xs12 offset-(md)(3) >
                      <h1 class="title_beauty text-xs-center">Наши партнеры</h1>
                       <div class="new_times text-xs-center px-5 mx-5">
                            <hr class="grey darken-3 accent-2 mt-0 d-inline-block mx-auto" style="width: 7%;">
                            </div>
                           
                  </v-flex>
                  <v-flex  xs10 offset-(xs)(1) md2 offset-(md)(2)  v-for="item in partners" :key="item.name">
                   <v-container>
                        <v-card color="transparent" tile flat>
                     
                      <v-img aspect-ratio="1.7" contain :src="require('../../assets/img/'+item.photo)" />
                    </v-card>
                   </v-container>
                  </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
data(){
    return{
          partners:[
       {  
        name:'LSBF',
        description:'London School of Business & Finance offers industry-focused programmes designed to reflect global market trends. LSBF attracts the most talented and ambitious candidates globally, and works together with its corporate partners to develop programmes structured with an up-to-date and international perspective in mind',
        link:'http://americancollege.lk/wp-content/uploads/2016/09/LSBF.png',
        photo:'partner-4.png',
        hyperlink:'https://www.lsbf.org.uk/'
    },
    {  
        name:'ACCA',
        description:'Our Approved Learning Partner (ALP) programme gives formal recognition to leading learning providers for the quality tuition and support that they offer to our students. It is the platform where we can develop a mutually beneficial relationship, increasing the global availability of effective and innovative course delivery and first-class student support',
        link:'https://www.accaglobal.com/etc/designs/acca/img/logo.svg',
        photo:'partner-2.png',
        hyperlink:'https://www.accaglobal.com/gb/en.html'
    },
    {  
        name:'Kaplan',
        description:'Kaplan is one of the world’s largest and most diverse education providers. Throughout our more than 80-year history, Kaplan has been a beacon for expanding educational access and a leader in instructional innovation.',
        link:'https://kaplan.com/wp-content/uploads/2017/01/Kaplan_logo.png',
        photo:'partner-3.png',
        hyperlink:'https://kaplan.com/'
    },
  
    ]
    }
}

}
</script>

<style>

</style>

<template>
    <div>
         <v-parallax class="service" height="390">
         
          <v-layout
            column
            align-center
            justify-center
            class="overlays white--text"
          >
    
            <h1 class="white--text mb-2 title_font text-xs-center">Course</h1>
            <div class="headline mb-3 text-xs-center">
             
            </div>
          
          </v-layout>
        </v-parallax>
       <quill-editor v-model="content"
                ref="myQuillEditor"
                options="formats"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
  </quill-editor>
<v-container>
    <v-layout row wrap>
        <v-flex xs12 md12>
            <v-card>
                <v-card-text v-html="content">
                  
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
    </div>

</template>

<script>
 export default{
     data(){
         return{
             content:''
         }
     },
       methods: {
      onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.editor)
    }
 }
</script>

<style>

</style>

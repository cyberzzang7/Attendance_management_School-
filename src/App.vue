<template>
  <div id="app">
    <v-app>
        <HeaderCom></HeaderCom>
        <SectionCom></SectionCom>
        <FooterCom></FooterCom>
    </v-app>
  </div>
</template>

<script>
import HeaderCom from './components/Header.vue'
import SectionCom from './components/Section.vue'
import FooterCom from './components/Footer.vue'

export default {
  components: {
    HeaderCom,
    SectionCom,
    FooterCom,
  },
  data(){
        return {
           
        }
    }
};
</script>

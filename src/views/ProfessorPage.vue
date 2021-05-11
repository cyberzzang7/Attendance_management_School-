<template>
  <div id="app">
    <v-app>
      <proHeaderCom></proHeaderCom>
    </v-app>
  </div>
</template>

<script>
import proHeaderCom from "../components/proHeader.vue";
import proSectionCom from "../components/proSection.vue";
import FooterCom from "../components/Footer.vue";

export default {
  components: {
    proHeaderCom,
    proSectionCom,
    FooterCom,
  },

  data() {
    return {};
  },
};
</script>

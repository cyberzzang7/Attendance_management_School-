import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import Char from './components/Char.vue'
import professorpage from './views/ProfessorPage.vue'

Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false;

// export const eventBus = new Vue()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

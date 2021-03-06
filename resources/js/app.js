/* eslint-disable no-unused-vars */
import './bootstrap'
import 'babel-polyfill'
import 'vuetify/dist/vuetify.min.css'
import 'nprogress/nprogress.css'

// vue and plugins
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import Vuelidate from 'vuelidate'

// components
import App from './components/App.vue'

// filters
import DateFilter from './filters/date'
import PriceFilter from './filters/cash'

// vue-router and vuex
import router from './router'
import store from './store/store'

Vue.filter('date', DateFilter)
Vue.filter('price', PriceFilter)
Vue.use(Vuelidate)
Vue.use(VueSweetalert2)
Vue.use(Vuetify)

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App }
})

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

new Vue({ 
      el: '#app',
      data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        items: [
          {
            text: 'Dashboard',
            disabled: false,
            href: 'breadcrumbs_dashboard'
          },
          {
            text: 'Link 1',
            disabled: false,
            href: 'breadcrumbs_link_1'
          },
          {
            text: 'Link 2',
            disabled: true,
            href: 'breadcrumbs_link_2'
          }
        ]
  }
  })
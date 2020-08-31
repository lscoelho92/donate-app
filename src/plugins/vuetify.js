import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#059D42',
          secondary: '#D4E4DB',
          submenu: '#93FFE8'
        },
      },
    },
    icons: {
      iconfont: 'fa'
    }
});

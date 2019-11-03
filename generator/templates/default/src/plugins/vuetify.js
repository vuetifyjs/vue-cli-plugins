import Vue from 'vue';
<%_ if (opts.useAlaCarte) { _%>
import Vuetify from 'vuetify/lib';
<%_ } else { _%>
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
<%_ } _%>
<%_ if (opts.locale !== 'en') { _%>
import <%= locale.replace(/-/g, '') %> from 'vuetify/<%= typescript ? 'src' : 'es5' %>/locale/<%= locale %>';
<%_ } _%>

Vue.use(Vuetify);

export default new Vuetify({
  <%_ if (opts.useTheme) { _%>
  theme: {
    <%_ if (opts.useCustomProperties) { _%>
      options: {
        customProperties: true,
      },
    <%_ } _%>
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  <%_ } _%>
  <%_ if (opts.locale !== 'en') { _%>
    lang: {
      locales: { <%= opts.locale.replace(/-/g, '') %> },
      current: '<%= locale %>',
    },
  <%_ } _%>
  <%_ if (opts.iconFont !== 'mdi') { _%>
  icons: {
    iconfont: '<%= opts.iconFont %>',
  },
  <%_ } _%>
});

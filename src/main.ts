
import './assets/main.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


// i18n
import { languages, defaultLocale } from './locales/index.js';
const messages = Object.assign(languages);

// Handle translations
const i18n = createI18n({
  fallbackLocale: 'fr',
  allowComposition: true,
  locale: defaultLocale,
  messages
});

const app = createApp(App)

app.use(createPinia()).use(vuetify).use(i18n)

app.mount('#app')
<template>
  <section id="language-input" class="my-8">
     <div 
      class="flex justify-center items-center w-full h-12 text-lg md:text-2xl 2xl:text-4xl grid-cols-2"
    >
      <div class="col-span-1 text-end px-2 w-2/3">
        {{ translations.title }}
      </div>

      <div class="col-span-1 text-start ps-4 md:ps-12 w-1/2 flex items-center">
        
        <select v-model="$i18n.locale" id="selectTest">
          <option v-for="lang in availableLanguages" :key="lang" :value="lang">
            <span class="flag-icon" :data-value="JSON.stringify(languageNames[lang].name)" ></span> {{ languageNames[lang].name }}
          </option>
        </select>

      </div>
    </div>
  </section>
</template>
  
<script>
import { store } from '@/stores/store';
import { languages, languageNames } from '@/locales/index';

export default {
  name: 'LanguageInput',
  props: {
  },
  data () {
  },
  computed: {
    translations() {
      return this.$i18n.messages[this.$i18n.locale].settings.language;
    },
    primaryColor() {
      return store.primaryColor;
    },
    secondaryColor() {
      return store.secondaryColor;
    },
    availableLanguages() {
      return Object.keys(languages);
    },
    languageNames() {
      return languageNames;
    },
  },
  mounted() {
    this.displayFlags();
  },
  methods: {
    displayFlags() {
      const options = document.querySelectorAll('.flag-icon');
      options.forEach(option => {
        const test = JSON.parse(option.dataset.value);
        if (test == 'English') {
          option.innerHTML = '🇬🇧'; 
        } else if (test == 'Français') {
          option.innerHTML = '🇫🇷';
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.flag-icon {
  width: 50px;
  height: 40px;
}

</style>
     
<template>
    <v-card>
    <v-toolbar :color="secondaryColor" density="comfortable">

      <photo-profile :image="photoProfileImg" :borderColor="primaryColor"></photo-profile>

      <v-toolbar-title :style="{ color: primaryColor }">Renaud Bresson</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon  :color="primaryColor">
        <v-icon size="x-large" :color="primaryColor">mdi-cog</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          :style="{ color: lightenPrimaryColor }"
          :color="primaryColor"
          :bg-color="secondaryColor"
          :slider-color="primaryColor"
          align-tabs="center"
        >
          <v-tab
            v-for="item in items"
            :key="item"
            :value="item"
            @click="updateToolbarHeight"
          >
            {{ translations[item] }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-window v-model="tab">
      <v-window-item
        v-for="item in items"
        :key="item"
        :value="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import { onMounted, onUpdated } from 'vue';
import { store } from './stores/store';
import PhotoProfile from './components/PhotoProfile.vue';
import photoProfileImg from './assets/initiale.png';

  export default {
    components: {
      'photo-profile': PhotoProfile,
    },
    data () {
      return {
        photoProfileImg: photoProfileImg,
        tab: null,
        items: [
          'about', 'skills', 'projects', 'contacts',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    computed: {
      translations() {
      return this.$i18n.messages[this.$i18n.locale].toolbar;
      },
      primaryColor() {
        return store.primaryColor;
      },
      secondaryColor() {
        return store.secondaryColor;
      },
      lightenPrimaryColor() {
        return this.getLightenColor(store.primaryColor, 80);
      }
    },
    mounted() {
      this.updateToolbarHeight();
    },
    methods: {
      /**
       * Returns a lightened version of the given color.
       * @param {string} color - The color to be lightened.
       * @param {number} amount - The amount by which to lighten the color.
       * @returns {string} - The lightened color.
       */
      getLightenColor(color, amount) {
      const num = parseInt(color.replace('#', ''), 16); // convert color to a 32bit-integer
      let r = (num >> 16) + amount;
      r > 255 && (r = 255);
      r < 0 && (r = 0);
      let g = (num & 0x0000ff) + amount;
      g > 255 && (g = 255);
      g < 0 && (g = 0);
      let b = ((num >> 8) & 0x00ff) + amount;
      b > 255 && (b = 255);
      b < 0 && (b = 0);
      return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
      },

      updateToolbarHeight() {
        this.$nextTick(() => {
          const toolbar = document.querySelector('.v-toolbar__content');
          toolbar.style.height = '80px';
        });
      }
    }
  }
</script>

<style scoped lang="scss">
@import "./assets/variables.scss";

.profile-img{
  width: 4rem;
  height: 4rem;
  margin: 2.5rem 0.5rem 2rem 4rem;
}

.v-toolbar-title{
  margin-top: 0.9rem;
  line-height: 4rem;
  font-family: $primary-font-family-bold;
  font-size: 3.5rem;
  font-weight: 700;

  .v-toolbar-title__placeholder{
    margin-top: 2rem;
  }
}

.mdi-cog{
  margin-top: 0.5rem;
  padding-right: 1rem;
  font-size:3rem;
}

.v-tabs {
  width:100%;

  .v-tab{
    width: 12vw;
    padding: auto;
    font-size: 1.1rem;
  }
}


</style>
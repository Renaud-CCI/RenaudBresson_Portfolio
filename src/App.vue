<template>
    <v-card>
    <v-toolbar :color="secondaryColor">

      <v-toolbar-title :style="{ color: primaryColor }">Your Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon  :color="primaryColor">
        <v-icon :color="primaryColor">mdi-cog</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          :style="{ color: lightenPrimaryColor }"
          :color="primaryColor"
          :bg-color="secondaryColor"
          :slider-color="primaryColor"
          v-model="tab"
          align-tabs="title"
        >
          <v-tab
            v-for="item in items"
            :key="item"
            :value="item"
          >
            {{ item }}
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
import { onMounted } from 'vue';
import { store } from './stores/store';

  export default {
    data () {
      return {
        tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    computed: {
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
        console.log(store);
        document.documentElement.style.setProperty('--primary-color', store.primaryColor);
        document.documentElement.style.setProperty('--secondary-color', store.secondaryColor);
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
      }
    }
  }
</script>

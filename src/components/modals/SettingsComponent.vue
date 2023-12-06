<template>
  <div 
    class="settings-modal" 
    ref="settingsModal"
    :style="{ 
      color: primaryColor, 
      backgroundColor: secondaryColor,
      border: '2px solid ' + primaryColor,
      boxShadow: '0 0 10px ' + primaryColor,
    }"
  >

    <div class="text-end w-full pe-4 md:pe-12 pt-4 md:pt-6">
      <div ref="closeButtonIcon">
        <v-btn icon @click="$emit('close')" @mouseover="bounceEffect">
          <v-icon icon >mdi-close-circle-outline</v-icon>
          <v-tooltip activator="parent" location="bottom">{{ translations.close }}</v-tooltip>  
        </v-btn>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center w-full h-5/6">
    
      <h2 class="text-center text-2xl md:text-4xl 2xl:text-6xl mt-0 mb-12">{{ translations.description }}</h2>

      <div class="w-full">
        <ColorInput :role="'primary'" />
      </div>

      <div class="w-full">
        <ColorInput :role="'secondary'" />
      </div>

      <div class="w-full">
        <LanguageInput />
      </div>

    </div>

  </div>

  <div 
    class="settings-backscreen" 
    :style="{ 
      backgroundColor: primaryColor
    }">
  </div>
</template>
  
<script>
import { gsap } from "gsap";
import { store } from '@/stores/store';
import ColorInput from "@/components/modals/ColorInput.vue";
import LanguageInput from "@/components/modals/LanguageInput.vue";

export default {
  name: 'SettingsComponent',
  components: {
    'ColorInput': ColorInput,
    'LanguageInput': LanguageInput,
  },
  props: {
    
  },
  computed: {
    translations() {
    return this.$i18n.messages[this.$i18n.locale].settings;
    },
    primaryColor() {
      return store.primaryColor;
    },
    secondaryColor() {
      return store.secondaryColor;
    }
  },
  methods: {
    bounceEffect() {
      gsap.to(this.$refs.closeButtonIcon, { 
        x: '+=5', 
        repeat: 3, 
        yoyo: true, 
        ease: 'power1.inOut', 
        duration: 0.05 
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.settings-modal {
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 90%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;

  .v-icon {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 768px) {
    .v-icon {
      font-size: 2.5rem;
    }
  }
}

.settings-backscreen {
  z-index: 5;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
</style>
     
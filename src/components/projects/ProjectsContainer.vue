<template>
  <div 
    class="projects-container m-4 pt-8 rounded" 
    ref="projectsContainer"
    :style="{ 
      color: primaryColor, 
      backgroundColor: secondaryColor,
      boxShadow: '0 0 3px ' + primaryColor,
    }"
  >


    <vueper-slides
      ref="myVueperSlides"
      autoplay
      duration="6000"
      :bullets="false"
      :pause-on-hover="pauseOnHover"
      :fixed-height="true"
      @autoplay-pause="internalAutoPlaying = false"
      @autoplay-resume="internalAutoPlaying = true"
      class="no-shadow slides-div" arrows-outside>
      
      <template #arrow-left>
        <v-icon class="left-arrow" size="x-large">mdi-chevron-left</v-icon>
      </template>

      <template #arrow-right>
        <v-icon class="right-arrow" size="x-large">mdi-chevron-right</v-icon>
      </template>

       
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :style="{ 
              boxShadow: 'none',
            }">

        <template #content>
        <ProjectCard :project="slide"/>
        </template>

      </vueper-slide>

      <template #pause>
        <i class="icon pause_circle_outline"></i>
      </template>

    </vueper-slides>
    
    <div class="pause-button flex justify-center text-3xl 2xl:text-5xl">
      <button @click="$refs.myVueperSlides[`${autoPlaying ? 'pause' : 'resume'}Autoplay`]();autoPlaying = !autoPlaying">
        <v-icon size="large">{{ autoPlaying ? 'mdi-pause-circle-outline' : 'mdi-play-circle-outline' }}</v-icon>
      </button>
    </div>
  </div>
</template>
  
<script>
import { gsap } from "gsap";
import { store } from '@/stores/store';
import { EventBus } from '@/event-bus';
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import ProjectCard from './ProjectCard.vue';


export default {
  name: 'ProjectsContainer',
  components: {
    VueperSlides,
    VueperSlide,
    ProjectCard,
  },
  props: {    
  },
  data() {
    return {
      pauseOnHover: true,
      autoPlaying: true,
      internalAutoPlaying: true,
      slides: [
          'pepelaboulange', 'revisions2plantes', 'formulotheque', 'simpsonsFight', 'puissance4', 'phpZoo'
        ]
    }
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
  mounted() {
    document.documentElement.style.setProperty('--primary-color', this.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', this.secondaryColor);
    EventBus.on('appColorChanged', this.updateColors);
  },
  beforeUnmount() {
    EventBus.off('appColorChanged', this.updateColors);
  },
  methods: {
    updateColors() {
      this.primaryColor = store.primaryColor;
      this.secondaryColor = store.secondaryColor;
      document.documentElement.style.setProperty('--primary-color', this.primaryColor);
      document.documentElement.style.setProperty('--secondary-color', this.secondaryColor);
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.projects-container{
  min-height:80vh;

  .slides-div {
    margin: 0 4rem;
  }

  .left-arrow, .right-arrow {
    color: var(--primary-color);
    font-size: 8rem;
  }

  .vueperslides--fixed-height { height: 65vh; }


  @media screen and (max-width: 1800px) {
    .left-arrow, .right-arrow {
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .slides-div {
      margin: 0 2.5rem;
    }
    .left-arrow, .right-arrow {
      font-size: 2.5rem;
    }

    .vueperslides--fixed-height { height: 95vh; }
  }
}



</style>
     
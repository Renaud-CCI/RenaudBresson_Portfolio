<template>
  <div 
    class="projects-container m-4 rounded" 
    ref="projectsContainer"
    :style="{ 
      color: primaryColor, 
      backgroundColor: secondaryColor,
      boxShadow: '0 0 3px ' + primaryColor,
    }"
  >

    <button @click="$refs.myVueperSlides[`${autoPlaying ? 'pause' : 'resume'}Autoplay`]();autoPlaying = !autoPlaying">
      <v-icon size="large">{{ autoPlaying ? 'mdi-pause-circle-outline' : 'mdi-play-circle-outline' }}</v-icon>
    </button>

    <vueper-slides
      ref="myVueperSlides"
      autoplay
      :bullets="false"
      :pause-on-hover="pauseOnHover"
      @autoplay-pause="internalAutoPlaying = false"
      @autoplay-resume="internalAutoPlaying = true"
      class="no-shadow mx-16 bg-red-500" arrows-outside>
      
<template #arrow-left>
    <v-icon class="left-arrow" size="x-large">mdi-arrow-left-circle</v-icon>
  </template>

  <template #arrow-right>
    <v-icon class="right-arrow" size="x-large">mdi-arrow-right-circle</v-icon>
  </template>

      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
        :style="{ 
        boxShadow: 'none',
      }"
        class=""/>
      <template #pause>
        <i class="icon pause_circle_outline"></i>
      </template>
    </vueper-slides>
    

  </div>
</template>
  
<script>
import { gsap } from "gsap";
import { store } from '@/stores/store';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
  name: 'ProjectsContainer',
  components: {
    VueperSlides,
    VueperSlide,
  },
  props: {    
  },
  data() {
    return {
      pauseOnHover: true,
      autoPlaying: true,
      internalAutoPlaying: true,
      slides: [
    {
      title: 'Slide #1',
      content: 'Slide 1 content.'
    },
    {
      title: 'Slide #2',
      content: 'Slide 2 content.'
    }
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
  },
  methods: {
    
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.projects-container{
  min-height:80vh;

    .left-arrow, .right-arrow {
      color: var(--primary-color);
      font-size: 5rem;
    }
  
}

</style>
     
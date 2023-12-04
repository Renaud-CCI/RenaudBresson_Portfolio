<template>
  <div 
    class="project-card m-4 px-6 rounded" 
    ref="projectCard"
  >
    <div class="grid grid-cols-2">
      <div class="col-span-1 flex justify-center items-center py-4">
        <img :src="src" :alt="project + '_logo'" class="projectImg w-3/4 rounded-lg">
      </div>
      <div class="col-span-1 flex justify-center items-center">
          {{ translations[project]['title'] }}
          {{ translations[project]['subtitle'] }}
          {{ translations[project]['technology'] }}
          {{ translations[project]['description1'] }}
          {{ translations[project]['description2'] }}
        
      </div>
    </div>
    
  </div>
</template>
  
<script>
import { gsap } from "gsap";
import { store } from '@/stores/store';
import formulothequeIMG from '@/assets/images/projects/formulotheque.png';
import phpZooIMG from '@/assets/images/projects/phpZoo.png';
import puissance4IMG from '@/assets/images/projects/puissance4.png';
import simpsonsFightIMG from '@/assets/images/projects/simpsonsFight.png';
import sunsetIMG from '@/assets/images/projects/sunset.png';

export default {
  name: 'ProjectCard',
  components: {
  },
  props: {
    project: {
      type: String,
      required: false,
    },
  },
  computed: {
    translations() {
    return this.$i18n.messages[this.$i18n.locale].projects;
    },
    primaryColor() {
      return store.primaryColor;
    },
    secondaryColor() {
      return store.secondaryColor;
    },
    src() {
      switch (this.project) {
        case 'phpZoo':
          return phpZooIMG;
        case 'sunset':
          return sunsetIMG;
        case 'puissance4':
          return puissance4IMG;
        case 'simpsonsFight':
          return simpsonsFightIMG;
        case 'formulotheque':
          return formulothequeIMG;
        default:
          return phpZooIMG;
      }
    }
  },
  mounted() {
    this.$el.style.setProperty('--primary-color', store.primaryColor);
  },
  methods: {
    
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.project-card{ 
  .projectImg{
    box-shadow: -1px 1px 5px 0 var(--primary-color);    
  }
}

</style>
     
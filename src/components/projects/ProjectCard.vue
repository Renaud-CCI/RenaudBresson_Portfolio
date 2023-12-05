<template>
  <div 
    class="project-card m-6 rounded" 
    ref="projectCard"
  >
    <div class="grid grid-cols-2">

      <div class="col-span-1 flex justify-center items-center py-4">
        <a class="flex justify-center" :href="translations[project]['link']" target="blank">
          <img :src="src" :alt="project + '_logo'" class="projectImg w-3/4 rounded-lg">
        </a>
      </div>

      <div class="col-span-1 flex-col py-4 pe-4 justify-center items-center text-center">
        <h2 class="project-title text-5xl"> {{ translations[project]['title'] }} </h2>
        <p class="text-xl pt-2">{{ translations[project]['subtitle'] }}</p>
        <p class="text-xl font-bold pt-1">{{ translations[project]['technology'] }}</p>
        
        <p class="text-2xl text-justify pt-4">{{ translations[project]['description1'] }}</p>
        <p class="text-2xl text-justify pt-1">{{ translations[project]['description2'] }}</p> 

        <div class="buttons grid grid-cols-2 justify-center items-center mt-8">
          <div 
            :class="translations[project]['githubLink'] ? 'col-span-1' : 'col-span-2'" 
            class="flex justify-center items-center"
            >
            <button 
              class="text-justify py-1 px-3 rounded-lg"
              ref="webButton"
              @mouseover="animateButton('webButton')"
              @mouseout="resetButton('webButton')"
              >
              <v-icon size="">mdi-web</v-icon>
              <a class="ms-2" :href="translations[project]['link']" target="blank">
                {{ translations['web'] }}
              </a>   
            </button>
          </div>

          <div 
            v-if="translations[project]['githubLink']" 
            class="col-span-1 flex justify-center items-center"
            >
            <button 
              class="text-justify py-1 px-3 rounded-lg"
              ref="githubButton"
              @mouseover="animateButton('githubButton')"
              @mouseout="resetButton('githubButton')"
              >
              <v-icon size="">mdi-github</v-icon>
              <a class="ms-2" :href="translations[project]['githubLink']" target="blank">
                {{ translations['github'] }}
              </a>   
            </button>
          </div>
        </div> 
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
    this.$el.style.setProperty('--secondary-color', store.secondaryColor);
  },
  methods: {
    animateButton(refName) {
      gsap.to(this.$refs[refName], { 
        backgroundColor: this.secondaryColor, 
        color: this.primaryColor, 
        border: "1px solid var(--primary-color)",
        duration: 0.5 });
    },
    resetButton(refName) {
      gsap.to(this.$refs[refName], { 
        backgroundColor: this.primaryColor, 
        color: this.secondaryColor, 
        duration: 0.5 });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.project-card{ 
  .projectImg{
    box-shadow: -1px 1px 5px 0 var(--primary-color);    
  }

  .project-title{
    font-family: $primary-font-family;
    font-weight: 700;
  }

  .buttons {
    font-size: 1.5rem;
    color: var(--secondary-color);

    button {
      background-color: var(--primary-color);
    }

    .v-icon {
      padding-bottom: 0.2rem;
    }
  }
}

</style>
     
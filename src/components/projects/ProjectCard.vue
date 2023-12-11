<template>
  <div 
    class="project-card rounded" 
    ref="projectCard"
  >
    <div class="grid grid-cols-2">

      <div class="img-div col-span-2 sm:col-span-1 flex justify-center items-center">
        <a class="flex justify-center" :href="translations[project]['link']" target="blank">
          <img 
            :src="src" 
            :alt="project + '_logo'" 
            class="projectImg rounded-lg"            
            ref="projectImg"
            @mouseover="animateImage"
            @mouseout="resetImage"
            >
        </a>
      </div>

      <div class="text-div col-span-2 sm:col-span-1 flex-col justify-center items-center text-center">
        <h2 class="project-title text-3xl sm:text-5xl 2xl:text-6xl"> {{ translations[project]['title'] }} </h2>
        <p class="project-subtitle text-lg 2xl:text-2xl">{{ translations[project]['subtitle'] }}</p>
        <p class="project-technology text-lg 2xl:text-2xl font-bold">{{ translations[project]['technology'] }}</p>
        
        <p class="project-description1 text-xl 2xl:text-3xl text-justify">{{ translations[project]['description1'] }}</p>
        <p class="project-description2 text-xl 2xl:text-3xl text-justify">{{ translations[project]['description2'] }}</p> 

        <div class="project-buttons grid grid-cols-2 justify-center items-center">
          <div 
            :class="translations[project]['githubLink'] ? 'col-span-2 sm:col-span-1' : 'col-span-2'" 
            class="flex justify-center items-center"
            >
            <button 
              class="text-center rounded-lg text-lg lg:text-xl 2xl:text-2xl"
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
            class="col-span-2 sm:col-span-1 flex justify-center items-center"
            >
            <button 
              class="text-center rounded-lg text-lg lg:text-xl 2xl:text-2xl"
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
    animateImage() {
      gsap.to(this.$refs.projectImg, { 
        scale: 1.1,
        boxShadow: '-20px 20px 50px 0 var(--primary-color)',  
        duration: 0.5 
      });
    },
    resetImage() {
      gsap.to(this.$refs.projectImg, { 
        scale: 1.0,
        boxShadow: '-1px 1px 5px 0 var(--primary-color)', 
        duration: 0.5 
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.project-card{ 
  padding: 4rem 0;
  .img-div{
    .projectImg{
      width: 35vw;
      box-shadow: -1px 1px 5px 0 var(--primary-color);  
    }
  }

  .text-div {
    padding: 0 4rem 0 0;

    .project-title{
      font-family: $primary-font-family;
      font-weight: 700;
      margin: 1rem 0;
    }

    .project-subtitle {
    }

    .project-technology{}
    
    .project-description1 {
      margin: 2rem 1rem 0 1rem;
    }
    
    .project-description2 {
      margin: 2rem 1rem 0 1rem;
    }
    
    .project-buttons {
      margin-top: 3rem;
      font-size: 1.5rem;
      color: var(--secondary-color);

      button {
        background-color: var(--primary-color);
        padding: 1rem 2rem;
      }

      .v-icon {
        padding-bottom: 0.2rem;
      }
    }
  }


  
  @media screen and (max-width: 1736px) {
    padding: 0 0;

    .text-div {
      padding: 0 0 0 0;

      .project-title{
        margin: 0 0;
      }
      
      .project-description1 {
        margin: 0.4rem 1rem 0 0.8rem;
      }
      
      .project-description2 {
        margin: 0.4rem 1rem 0 0.8rem;
      }
      
      .project-buttons {
        margin-top: 1rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
      padding: 0 0;
    .img-div{
      .projectImg{
        width: 60vw;
      }
    }

    .text-div {
      padding: 0 0 0 0;

      .project-title{
        margin: 0.8rem 0;
        font-size: 1.7rem;
      }

      .project-subtitle {
        margin-top: -0.7rem;
        font-size: 1rem;
        line-height: 1.2rem;
      }

      .project-technology{
        font-size: 1rem;}
      
      .project-description1 {
        margin: 0.5rem 0 0 0;
        font-size: 1rem;
        line-height: 1.2rem;
      }
      
      .project-description2 {
        margin: 0.5rem 0 0 0;
        font-size: 1rem;
        line-height: 1.2rem;
      }
      
      .project-buttons {
        margin-top: 1rem;

        button {
          text-align: center;
          padding: 0.3rem 1rem;
          width: 60vw;
          margin: 0.3rem 0;
        }

        .v-icon {
          padding-bottom: 0.2rem;
        }
      }
    }
  }
}


</style>
     
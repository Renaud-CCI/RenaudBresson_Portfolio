<template>
  <div 
    class="skills-container m-4 rounded font-mono" 
    ref="skillsContainer"
    :style="{ 
      color: primaryColor, 
      backgroundColor: secondaryColor,
      boxShadow: '0 0 3px ' + primaryColor,
    }">
      <div class="introduction">
        <p class="intro1">
          {{ translations.title }}
        </p>
        <div class="intro2 grid grid-cols-3">
          <ScaleCard class="col-span-3 sm:col-span-1" role="firstScale"/>          
          <ScaleCard class="col-span-3 sm:col-span-1" role="secondScale"/>
          <ScaleCard class="col-span-3 sm:col-span-1" role="thirdScale"/>
        </div>
        <p class="intro3">
          {{ translations.subtitle }}
        </p>
      </div>

      <div class="cards grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-24">
        <LogoCard lang="Symfony" scale="thirdScale"/>        
        <LogoCard lang="Laravel" scale="firstScale"/>
        <LogoCard lang="JavaScript" scale="thirdScale"/>
        <LogoCard lang="TypeScript" scale="firstScale"/>
        <LogoCard lang="VueJS" scale="thirdScale"/>
        <LogoCard lang="Angular" scale="firstScale"/>
        <LogoCard lang="Bootstrap" scale="secondScale"/>
        <LogoCard lang="Tailwind" scale="thirdScale"/>
        <LogoCard lang="Sass" scale="thirdScale"/>
        <LogoCard lang="SQL" scale="secondScale"/>
        <LogoCard lang="GitHub" scale="firstScale"/>
        <LogoCard lang="WordPress" scale="firstScale"/>
        <LogoCard lang="Linux" scale="secondScale"/>

      </div>
    
  </div>
</template>
  
<script>
import { store } from '@/stores/store';
import ScaleCard from '@/components/skills/ScaleCard.vue';
import LogoCard from '@/components/skills/LogoCard.vue';

export default {
  name: 'SkillsContainer',
  components: {
    ScaleCard,
    LogoCard,
  },
  props: {
    
  },
  computed: {
    translations() {
    return this.$i18n.messages[this.$i18n.locale].skills.container;
    },
    primaryColor() {
      return store.primaryColor;
    },
    secondaryColor() {
      return store.secondaryColor;
    },
    firstScale() {
      return store.firstScale;
    },
  },
  methods: {
   
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.skills-container{
  min-height:80vh;
  text-align: justify;

  .introduction {
    padding: 3rem 10rem;

    .intro1 {
      font-size: 2rem;
      padding: 0 4rem 4rem 4rem;
    }

    .intro2 {
      font-size: 1.3rem;
    }

    .intro3 {
      font-size: 2rem;
      padding: 3rem 4rem 0 4rem;
    }
  }

  .cards {
    padding: 2rem 10rem;
  }

  @media screen and (max-width: 1736px) {
    .introduction {
      padding: 3rem 1rem;

      .intro1 {
        font-size: 1.3rem;
        padding: 0 4rem 2.5rem 4rem;
      }

      .intro2 {
        font-size: 1rem;
      }

      .intro3 {
        font-size: 1.3rem;
        padding: 2rem 4rem 0 4rem;
      }
    }

    .cards {
      padding: 2rem 10rem;
    }
  }

  @media screen and (max-width: 768px) {
    .introduction {
      padding: 1rem 0;

      .intro1 {
        font-size: 1rem;
        padding: 0 1.2rem 2.5rem 1.2rem;
      }

      .intro2 {
        font-size: 0.7rem;
      }

      .intro3 {
        font-size: 1rem;
        padding: 0.5rem 1.2rem 0 1.2rem;
      }
    }

    .cards {
      padding: 1rem 1rem;
    }
  }
}

</style>
     
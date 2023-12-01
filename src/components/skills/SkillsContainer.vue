<template>
  <div 
    class="skills-container m-4 rounded font-mono" 
    ref="skillsContainer"
    :style="{ 
      color: primaryColor, 
      backgroundColor: secondaryColor,
      boxShadow: '0 0 3px ' + primaryColor,
    }">
      <div class="px-36">
        <p class="text-xl pt-12 pb-4 px-20">
          {{ translations.title }}
        </p>
        <div class="grid grid-cols-3">
          <ScaleCard role="firstScale"/>          
          <ScaleCard role="secondScale"/>
          <ScaleCard role="thirdScale"/>
        </div>
        <p class="text-xl pt-8 px-20">
          {{ translations.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-4 gap-24 pt-24 pb-8 px-36">
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
}

</style>
     
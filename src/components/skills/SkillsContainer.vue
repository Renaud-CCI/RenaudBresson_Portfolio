<template>
  <div 
    class="skills-container m-4 rounded" 
    ref="skillsContainer"
    :style="{ 
      color: primaryColor, 
      backgroundColor: secondaryColor,
      boxShadow: '0 0 3px ' + primaryColor,
    }"
  >
SKILLS
    
  </div>
</template>
  
<script>
import { gsap } from "gsap";
import { store } from '@/stores/store';

export default {
  name: 'SkillsContainer',
  components: {
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
   
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";


</style>
     
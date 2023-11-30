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
PROJECTS
    
  </div>
</template>
  
<script>
import { gsap } from "gsap";
import { store } from '@/stores/store';

export default {
  name: 'ProjectsContainer',
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
.projects-container{
  min-height:80vh;
}

</style>
     
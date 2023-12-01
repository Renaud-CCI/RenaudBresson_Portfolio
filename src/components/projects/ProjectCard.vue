<template>
  <div 
    class="project-card m-4 rounded" 
    ref="projectCard"
  >
    HELLO WORLD
    
  </div>
</template>
  
<script>
import { gsap } from "gsap";
import { store } from '@/stores/store';

export default {
  name: 'ProjectCard',
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
  mounted() {
  },
  methods: {
    
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.project-card{ 
}

</style>
     
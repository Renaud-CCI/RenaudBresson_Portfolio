<template>

    <div class="image-container">
      <img 
        class="gameboy-photo" 
        src="@/assets/images/photos/gameboy-photo-nb.png" 
        alt="photo"
      >

      <div class="image-filter" :style="{ backgroundColor: primaryColor }"></div>
    </div>
    
</template>
  
<script>
import { store } from '@/stores/store';

export default {
  name: 'GameboyImage',
  components: {
  },
  props: {
    
  },
  computed: {
    primaryColor() {
      return store.primaryColor;
    },
  },
  methods: {
   
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.image-container{
  position: relative;
  width: 260px;
  height: 310px;

  .gameboy-photo{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .image-filter{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    border-radius: 5px;
  }

}

  @media screen and (max-width: 1736px) {
    .image-container{
      width: 190px;
      height: 240px
    }
  }

  @media screen and (max-width: 768px) {
    .image-container{
      width: 150px;
      height: 185px;
    }
  }


</style>
     
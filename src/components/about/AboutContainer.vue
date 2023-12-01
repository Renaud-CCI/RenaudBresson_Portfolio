<template>
  <div 
    class="about-container m-4 rounded p-8" 
    ref="aboutContainer"
    :style="{ 
      color: primaryColor, 
      backgroundColor: secondaryColor,
      boxShadow: '0 0 3px ' + primaryColor,
    }"
  >

  <div class="description-container grid grid-cols-2 px-44">
    <div class="col-span-1 relative flex flex-col items-center justify-center">
      <GameboyImage/>
    </div>

    <div class="description col-span-1 flex flex-col justify-center items-start">

      <div class="flex items-end my-1">
        <h2 class="text-3xl font-bold">{{ translations.lastname }} :</h2>
        <p class="text-3xl ps-4">Bresson</p> 
      </div>

      <div class="flex items-end my-1">
        <h2 class="text-3xl font-bold">{{ translations.firstname }} :</h2>
        <p class="text-3xl ps-4">Renaud</p> 
      </div>

      <div class="flex items-end my-1">
        <h2 class="text-3xl font-bold">{{ translations.birthdate }} :</h2>
        <p class="text-3xl ps-4">29/11/1982</p> 
      </div>

      <div class="flex items-start my-1">
        <h2 class="text-3xl font-bold">{{ translations.particularity.title }} :</h2>
        <div class="flex flex-col items-start ps-4">
          <p class="text-3xl">- {{ translations.particularity.content1 }}</p> 
          <p class="text-3xl">- {{ translations.particularity.content2 }}</p> 
          <p class="text-3xl">- {{ translations.particularity.content3 }}</p> 
          </div>
      </div>
    </div>
  </div>

  <div class="biography-container px-72 mt-4">
    <p> {{ translations.biography.firstP }} </p>
    <p> {{ translations.biography.secondP }} </p>
    <p> {{ translations.biography.thirdP }} </p>
  </div>
    
  </div>
</template>
  
<script>
import { gsap } from "gsap";
import { store } from '@/stores/store';
import GameboyImage from '@/components/about/GameboyImage.vue';

export default {
  name: 'AboutContainer',
  components: {
    GameboyImage
  },
  props: {
    
  },
  computed: {
    translations() {
    return this.$i18n.messages[this.$i18n.locale].about;
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

.about-container{
  min-height:80vh;
  .description-container{
    min-height: 300px;

    .description{
      font-family: $pixelized-font-family;
    }
  }

  .biography-container{
    font-family: $pixelized-font-family;
    text-align: justify;
    font-size: 1.5rem;
  }
}

</style>
     
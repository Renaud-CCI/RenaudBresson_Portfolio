<template>
  <div 
    class="about-container m-4 rounded" 
    ref="aboutContainer"
    :style="{ 
      color: primaryColor, 
      backgroundColor: secondaryColor,
      boxShadow: '0 0 3px ' + primaryColor,
    }"
  >

  <div class="description-container grid grid-cols-2 px-22 2xl:px-44">
    <div class="col-span-2 sm:col-span-1 relative flex flex-col items-center justify-center">
      <GameboyImage/>
    </div>

    <div class="description col-span-2 sm:col-span-1 flex flex-col justify-center items-center sm:items-start">

      <div class="flex items-end my-1">
        <h2 class="font-bold">{{ translations.lastname }} :</h2>
        <p class="ps-4">Bresson</p> 
      </div>

      <div class="flex items-end my-1">
        <h2 class="font-bold">{{ translations.firstname }} :</h2>
        <p class="ps-4">Renaud</p> 
      </div>

      <div class="flex items-end my-1">
        <h2 class="font-bold">{{ translations.birthdate }} :</h2>
        <p class="ps-4">29/11/1982</p> 
      </div>

      <div class="flex items-start my-1">
        <h2 class="font-bold">{{ translations.particularity.title }} :</h2>
        <div class="flex flex-col items-start ps-4">
          <p class="">- {{ translations.particularity.content1 }}</p> 
          <p class="">- {{ translations.particularity.content2 }}</p> 
          <p class="">- {{ translations.particularity.content3 }}</p> 
          </div>
      </div>
    </div>
  </div>

  <div class="biography-container font-mono">
    <p> {{ translations.biography.firstP }} </p>
    <p class="py-2"> {{ translations.biography.secondP }} </p>
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
    min-height: 400px;

    .description{
      font-family: $pixelized-font-family;
      font-size: 2.5rem;
      line-height: 2.8rem;
      margin-top: 0;
    }
  }

  .biography-container{
    text-align: justify;
    font-size: 1.7rem;    
    margin: 2.5rem 28rem;
    padding-bottom: 1rem;
  }


  @media screen and (max-width: 1535px) {
    .description-container{
      min-height: 300px;

      .description{
        font-size: 1.8rem;
        line-height: 2.2rem;
      }
    }

    .biography-container{
      font-size: 1.1rem;
      margin: 0.8rem 12rem;
      padding-bottom: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    .description-container{
      min-height: 300px;
      padding-top: 15px;

      .description{
        font-size: 1.2rem;
        line-height: 1.2rem;
        margin-top: 15px;
      }
    }

    .biography-container{
      font-size: 1rem;     
      margin: 1rem 1.2rem;
      padding-bottom: 1rem;
    }
  }
}

</style>
     
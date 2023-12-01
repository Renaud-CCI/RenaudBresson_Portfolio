<template>
  <section id="logo-card" class="cursor-pointer rounded">

    <div class="skill-card col-span-1 rounded h-48" @click="toggleBackground()">
      <div class="flex flex-col justify-center items-center">
        <img :src="src" :alt="lang + '_logo'" class="w-28 py-4">
      </div>
      <h2 class="text-2xl text-center font-bold text-neutral-700">{{ lang }}</h2>
    </div>

  </section>
</template>
  
<script>
import { store } from '@/stores/store';
import { gsap } from "gsap";
import { EventBus } from '@/event-bus';
import Symfony from '@/assets/images/lang_logos/Symfony.png';
import Laravel from '@/assets/images/lang_logos/Laravel.png';
import VueJS from '@/assets/images/lang_logos/VueJS.png';
import Angular from '@/assets/images/lang_logos/Angular.png';
import Bootstrap from '@/assets/images/lang_logos/Bootstrap.png';
import Tailwind from '@/assets/images/lang_logos/Tailwind.png';
import GitHub from '@/assets/images/lang_logos/GitHub.png';
import JavaScript from '@/assets/images/lang_logos/JavaScript.png';
import TypeScript from '@/assets/images/lang_logos/TypeScript.png';
import Linux from '@/assets/images/lang_logos/Linux.png';
import Sass from '@/assets/images/lang_logos/Sass.png';
import SQL from '@/assets/images/lang_logos/SQL.png';
import WordPress from '@/assets/images/lang_logos/WordPress.png';


export default {
  name: 'LogoCard',
  components: {
  },
  props: {
    scale: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      colorOfTheBackground: null
    }
  },
  computed: {
    primaryColor() {
      return store.primaryColor;
    },
    secondaryColor() {
      return store.secondaryColor;
    },
    firstScale() {
      return store.firstScale;
    },
    secondScale() {
      return store.secondScale;
    },
    thirdScale() {
      return store.thirdScale;
    },
    src(){
      switch (this.lang) {
        case 'Angular':
          return Angular;
        case 'Bootstrap':
          return Bootstrap;
        case 'GitHub':
          return GitHub;
        case 'JavaScript':
          return JavaScript;
        case 'Laravel':
          return Laravel;
        case 'Linux':
          return Linux;
        case 'Sass':
          return Sass;
        case 'SQL':
          return SQL;        
        case 'Symfony':
          return Symfony;
        case 'Tailwind':
          return Tailwind;
        case 'TypeScript':
          return TypeScript;
        case 'VueJS':
          return VueJS;
        case 'WordPress':
          return WordPress;
        default:
          return null;
      }
    },
    backgroundColor() {
      return this.colorOfTheBackground;
    },
  },
  mounted() {
    this.$el.style.setProperty('--primary-color', store.primaryColor);
    EventBus.on('skillColorChanged', this.colorChanged);
  },
  beforeUnmount() {
    EventBus.off('skillColorChanged', this.colorChanged);
  },
  methods: {
    colorChanged() {
      this.colorOfTheBackground = this.colorOfTheBackground != null ? store[this.scale] : null;
      this.$el.style.backgroundColor = this.colorOfTheBackground;
    },
    toggleBackground() {
      this.colorOfTheBackground = this.colorOfTheBackground == null ? store[this.scale] : null;
      let randomNumber = Math.floor(Math.random() * 8) + 1;

          gsap.set(this.$el, { rotation: 0,  rotationY: 0, x: 0 });
      const tl = gsap.timeline();
      switch (randomNumber) {
        case 1:
          gsap.to(this.$el, { rotation: 360, backgroundColor: this.colorOfTheBackground, duration: 1 });
          break;

        case 2:
          
          tl.to(this.$el, { scale: 0.8, backgroundColor: this.colorOfTheBackground, duration: 0.1 })
          .to(this.$el, { scale: 1, backgroundColor: this.colorOfTheBackground, duration: 0.1 });
          break;
      
        case 3:
          tl.to(this.$el, { rotationY: 180, duration: 0.3 })
          .to(this.$el, { rotationY: 0, backgroundColor: this.colorOfTheBackground, duration: 0.4 }); 
          break;

        case 4:
          gsap.to(this.$el, { rotationY: 360, rotation: 360, backgroundColor: this.colorOfTheBackground, duration: 0.5 });
          break;

        case 5:      
          tl.to(this.$el, { scale: 1.1, duration: 0.1 })
          .to(this.$el, { scale: 1, ease: "elastic.out(1, 0.3)", duration: 0.3, backgroundColor: this.colorOfTheBackground });
          break;

        case 6:      
          tl.to(this.$el, { y: 30, duration: 0.2 })
          .to(this.$el, { y: 0, ease: "bounce.out", duration: 0.3, backgroundColor: this.colorOfTheBackground });
          break;

        case 7:
          gsap.to(this.$el, { x: "+=20", yoyo: true, repeat: 3, duration: 0.1 });
          gsap.to(this.$el, { backgroundColor: this.colorOfTheBackground, duration: 0.6 });
          break;

        case 8:      
          tl.to(this.$el, { opacity: 0, duration: 0.4 })
            .to(this.$el, { opacity: 1, backgroundColor: this.colorOfTheBackground, duration: 0.6 }); 
      }
    }
  },
  created() {
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.skill-card{
  border: 2px solid var(--primary-color);
  box-shadow: 0 0 5px 0 var(--primary-color);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: -1px 1px 5px 0 var(--primary-color);
  }
}
</style>
     
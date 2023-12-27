<template>
  <section id="scale-card" class="">

   <div class="grid grid-cols-3">

              <div class="row-span-2 sm:row-span-1 col-span-1 sm:col-span-3">
              <ScaleColorInput :role="role" />
              </div>

              <div class="title col-span-2 sm:col-span-3 flex justify-center items-center h-full lg:h-24 2xl:h-28">
                <p class="uppercase font-bold text-center">
                  {{ translations.title }}
                </p>
              </div>

              <div class="subtitle col-span-2 sm:col-span-3 col-start-2 sm:col-start-1">
                <p class="italic text-center">
                  {{ translations.description }}
                </p>
              </div>
            </div>

  </section>
</template>
  
<script>
import { store } from '@/stores/store';
import ScaleColorInput from '@/components/skills/ScaleColorInput.vue';

export default {
  name: 'ScaleCard',
  components: {
    ScaleColorInput
  },
  props: {
    role: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
    }
  },
  computed: {
    translations() {
      return this.$i18n.messages[this.$i18n.locale].skills.card[this.role];
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
    secondScale() {
      return store.secondScale;
    },
    thirdScale() {
      return store.thirdScale;
    },   
  },
  mounted() {
  },
  methods: {
    
  },
  created() {
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
 .title {
  p {
    padding: 0 4rem;
    font-size: 1.5rem;
  }
 }

 .italic {
  margin-top: -1rem;
  padding: 0 1.5rem;
  font-size: 1.25rem;
 }


  @media screen and (max-width: 1800px) {
    .title {
      p {
        padding: 0 2rem;
        font-size: 1rem;
      }
    }

    .italic {
      margin-top: -1.2rem;
      padding: 0 1rem;
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 768px) {
    .title {
      p {
        padding: 0 0.2rem 0 0;
        font-size: 0.8rem;
      }
    }

    .italic {
      margin: 0.2rem 0 1.5rem;
      padding: 0 0.2rem 0 0;
      font-size: 0.7rem;
    }
  }
</style>
     
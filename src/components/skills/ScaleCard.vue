<template>
  <section id="scale-card" class="">

   <div class="grid grid-cols-1">

              <div class="col-span-1">
              <ScaleColorInput :role="role" />
              </div>

              <div class="col-span-1 h-16 flex justify-center items-center">
                <p class="uppercase text-xl font-bold text-center pt-4 px-14">
                  {{ translations.title }}
                </p>
              </div>

              <div class="col-span-1">
                <p class="italic text-center pt-2 px-6">
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

</style>
     
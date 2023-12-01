<template>
  <section id="color-input" class="">

    <div class="w-full flex items-center justify-center">
      <div class="input-color-div rounded" :style="{ border: '2px solid ' + primaryColor, boxShadow: `0 0 5px 0 ${primaryColor}`}">
        <input 
          type="color"
          class="custom-input cursor-pointer" 
          v-model="color"
          @change="updateColorInStore()" 
        >
      </div>
    </div>

  </section>
</template>
  
<script>
import { store } from '@/stores/store';

export default {
  name: 'ScaleColorInput',
  props: {
    role: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      color: '',
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
  },
  mounted() {
    this.updateColor();
  },
  methods: {
    updateColor() {
      console.log(this.role.toString());
      console.log(store);
      switch (this.role) {
        case 'firstScale':
          this.color = this.firstScale;
          console.log(this.color);
          break;
        case 'secondScale':
          this.color = this.secondScale;
          break;
        case 'thirdScale':
          this.color = this.thirdScale;
          break;
        default:
          break;
      }
    },
    updateColorInStore() {
      switch (this.role) {
        case 'firstScale':
          store.firstScale = this.color;
          break;
        case 'secondScale':
          store.secondScale = this.color;
          break;
        case 'thirdScale':
          store.thirdScale = this.color;
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.input-color-div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  text-align: center;
  overflow: hidden;

  .custom-input {
    width: 100%;
    height: 50px;
    scale: 2;
  }

}
</style>
     
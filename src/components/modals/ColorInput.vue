<template>
  <section id="color-input" class="my-12">
    <div 
      class="flex justify-center items-center w-full h-12 text-2xl grid-cols-2"
    >
      <div class="col-span-1 text-end px-2 w-1/2">
        {{ translations.title }}
      </div>

      <div class="col-span-1 text-start ps-12 w-1/2 flex items-center">
        <div class="input-color-div rounded-full" :style="{ border: '2px solid ' + primaryColor, boxShadow: `0 0 5px 0 ${primaryColor}`}">
          <input 
            type="color"
            class="custom-input cursor-pointer" 
            v-model="color"
            @change="updateColorInStore()" 
          >
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import { store } from '@/stores/store';

export default {
  name: 'ColorInput',
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
    translations() {
      return this.$i18n.messages[this.$i18n.locale].settings[this.role];
    },
    primaryColor() {
      return store.primaryColor;
    },
    secondaryColor() {
      return store.secondaryColor;
    }    
  },
  mounted() {
    this.updateColor();
    console.log(Object.keys(this.$i18n.messages));
  },
  methods: {
    updateColor() {
      if (this.role === 'primary') {
        this.color = this.primaryColor;
      } else if (this.role === 'secondary') {
        this.color = this.secondaryColor;
      }
    },
    updateColorInStore() {
      if (this.role === 'primary') {
        store.primaryColor = this.color;
      } else if (this.role === 'secondary') {
        store.secondaryColor = this.color;
      }
    },
  },
  created() {
    this.selectedColor = this.color;
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.input-color-div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  text-align: center;
  overflow: hidden;

  .custom-input {
    width: 50px;
    height: 50px;
    scale: 2;
  }

}
</style>
     
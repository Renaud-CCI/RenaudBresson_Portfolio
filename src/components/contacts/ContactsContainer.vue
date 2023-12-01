<template>
  <div 
    class="contacts-container m-4 rounded sans-serif" 
    ref="contactsContainer"
    :style="{ 
      color: primaryColor, 
      backgroundColor: secondaryColor,
      boxShadow: '0 0 3px ' + primaryColor,
    }"
  >

    <div class="p-4">
      <form 
      id="fs-frm" 
      name="simple-contact-form" 
      accept-charset="utf-8" 
      action="https://formspree.io/f/mnqkkwnj" 
      method="post"
      class="flex flex-col justify-center items-center">

        <h2 class="text-3xl font-bold m-6 px-64 pt-4 text-center">
          {{ translations.title.part1 }}
          {{ translations.title.part2 }}
          {{ translations.title.part3 }}
        </h2>

        <div class="inline-flex my-6">
          <a class="" href="https://www.linkedin.com/in/renaud-bresson" :title="translations['linked-in-tag']" target="_blank"> <img :src="LinkedIn" alt="linkedIn_logo" class="w-20 mx-8"></a>

          <a class="" href="https://github.com/Renaud-CCI" target="_blank" :title="translations['github-tag']"> <img :src="Github" alt="github_logo" class="w-20 mx-8"></a>

        </div>


        <h2 class="text-3xl font-bold m-6">{{ translations.subtitle }}</h2>

        <fieldset id="fs-frm-inputs" class="grid grid-cols-2 mt-6">

          <div class="col-span-1 grid grid-cols-2 mx-20">
            <label class="col-span-2 text-xl pb-2" for="full-name">{{ translations.name }}</label>
            <input class="col-span-2 bg-white p-1 w-full h-10 rounded text-lg mb-8" type="text" name="name" id="full-name" :placeholder=" translations['name-placeholder']" required="">
          </div>

          <div class="col-span-1 grid grid-cols-2 mx-20">
            <label class="col-span-2 text-xl pb-2" for="email-address">{{ translations.email }}</label>
            <input class="col-span-2 bg-white p-1 w-full h-10 rounded text-lg mb-8" type="email" name="_replyto" id="email-address" :placeholder=" translations['email-placeholder']" required="">
          </div>

          <div class="col-span-2 grid grid-cols-2 mx-20">
            <label class="col-span-2 text-xl pb-2" for="message"> {{ translations.message }}</label>
            <textarea class="col-span-2 bg-white p-1 w-full rounded text-lg mb-8" rows="5" name="message" id="message" :placeholder=" translations['message-placeholder']" required=""></textarea>
          </div>
          
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
        </fieldset>
        <input class='text-xl rounded px-4 py-3' type="submit" :value="translations['submit']" :style="{ 
      color: secondaryColor, 
      backgroundColor: primaryColor,
      boxShadow: '0 0 3px ' + primaryColor,
    }">
      </form>
    </div>
    
  </div>
</template>
  
<script>
import { store } from '@/stores/store';
import LinkedIn from '@/assets/images/LinkedIn.png';
import Github from '@/assets/images/lang_logos/GitHub.png';

export default {
  name: 'ContactsContainer',
  components: {
  },
  props: {
    
  },
  data () {
    return {
      LinkedIn: LinkedIn,
      Github: Github,
    }
  },
  computed: {
    translations() {
    return this.$i18n.messages[this.$i18n.locale].contacts;
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
.contacts-container{
  min-height:80vh;
}
</style>
     
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

    <div class="form-container">
      <form 
      id="fs-frm" 
      name="simple-contact-form" 
      accept-charset="utf-8" 
      action="https://formspree.io/f/mnqkkwnj" 
      method="post"
      class="flex flex-col justify-center items-center">

        <h2 class="title1 font-bold text-center">
          {{ translations.title.part1 }}
            <a :href="cv" download>{{ translations.title.part2 }}</a>
          {{ translations.title.part3 }}
        </h2>

        <div class="link-div inline-flex">
          <a 
            href="https://www.linkedin.com/in/renaud-bresson" 
            :title="translations['linked-in-tag']" 
            target="_blank"
            >
            <v-icon ref="linkedinIcon">mdi-linkedin</v-icon>
          </a>

          <a 
            href="https://github.com/Renaud-CCI" 
            target="_blank" 
            :title="translations['github-tag']"
            > 
            <v-icon ref="githubIcon">mdi-github</v-icon>
          </a>
        </div>


        <h2 class="title2 font-bold text-center">{{ translations.subtitle }}</h2>

        <fieldset id="fs-frm-inputs" class="contact-div grid grid-cols-2">

          <div class="input-div col-span-2 sm:col-span-1 grid grid-cols-2">
            <label class="col-span-2" for="full-name">{{ translations.name }}</label>
            <input class="col-span-2 bg-white p-1 w-full h-10 rounded" type="text" name="name" id="full-name" :placeholder=" translations['name-placeholder']" required="">
          </div>

          <div class="input-div col-span-2 sm:col-span-1 grid grid-cols-2">
            <label class="col-span-2" for="email-address">{{ translations.email }}</label>
            <input class="col-span-2 bg-white p-1 w-full h-10 rounded" type="email" name="_replyto" id="email-address" :placeholder=" translations['email-placeholder']" required="">
          </div>

          <div class="input-div col-span-2 grid grid-cols-2">
            <label class="col-span-2" for="message"> {{ translations.message }}</label>
            <textarea class="col-span-2 bg-white p-1 w-full rounded" rows="5" name="message" id="message" :placeholder=" translations['message-placeholder']" required=""></textarea>
          </div>
          
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
        </fieldset>
        <input class='submit-button rounded' type="submit" :value="translations['submit']" :style="{ 
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
import { getLightenColor } from '@/services/colorService';
import cv from '@/assets/cv/cv.pdf';

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
      cv: cv,
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
  mounted() {
    this.$el.style.setProperty('--primary-color', store.primaryColor);
    this.$el.style.setProperty('--light-color', getLightenColor(store.primaryColor, 80));
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.contacts-container{
  min-height:80vh;

  .form-container {

    .title1 {
      padding: 2rem 20rem 0;
      font-size: 2.2rem;

      a {
        font-weight: bold;
        text-decoration: underline;
      }
    }

    .link-div {
      a {
        font-size: 6rem;
        margin: 0 3rem;
        transition: color 0.2s ease-in-out;

        &:hover {
          color: var(--light-color);
        }
      }
    }

    .title2 {
      padding: 1rem 20rem;
      font-size: 2.2rem;
    }

    .contact-div {
      padding: 2rem 20rem;
      font-size: 1.7rem;

      .input-div {
        padding: 0 3rem;
        label {
          padding: 0 0 0.5rem;
        }
        input {
          margin-bottom: 2rem;
        }
      }
    }

    .submit-button {
      margin: 2rem 0;
      padding: 1rem 2rem;
      font-size: 1.6rem;
    }
  }

   @media screen and (max-width: 1535px) {
    .form-container {

      .title1 {
        padding: 1rem 20rem 0;
        font-size: 1.5rem;
      }

      .link-div {
        a {
          font-size: 4rem;
          margin: 0 2rem;
        }
      }

      .title2 {
        padding: 0.8rem 20rem;
        font-size: 1.5rem;
      }

      .contact-div {
        padding: 0 20rem;
        font-size: 1.2rem;

        .input-div {
          padding: 0 3rem;
          label {
            padding: 0 0 0.2rem;
          }
          input {
            margin-bottom: 1rem;
          }
        }
      }

      .submit-button {
        margin: 1rem 0;
        padding:  0.5rem 1.5rem;
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
      .form-container {

      .title1 {
        padding: 0.5rem 1rem 0;
        font-size: 1.1rem;
      }

      .link-div {
        a {
          font-size: 3rem;
          margin: 0 1rem;
        }
      }

      .title2 {
        padding: 0.8rem 1rem;
        font-size: 1.1rem;
      }

      .contact-div {
        padding: 0 1rem;
        font-size: 1rem;

        .input-div {
          padding: 0 3rem;
          label {
            padding: 0 0 0.2rem;
          }
          input {
            margin-bottom: 1rem;
          }
        }
      }

      .submit-button {
        margin: 1rem 0;
        padding: 0.5rem 1rem;
        font-size: 1rem;
      }
    }
  }
}
</style>
     
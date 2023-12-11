<template>
    <v-card>
    <v-toolbar :color="secondaryColor" density="comfortable">

      <photo-profile :image="photoProfileImg" :borderColor="primaryColor"></photo-profile>

      <v-toolbar-title class="title-bold" :style="{ color: primaryColor }">Renaud Bresson</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn 
        icon 
        ref="settingsButton" 
        :color="primaryColor" 
        @click="toggleShowSettings()"
      >
        <v-icon size="x-large" ref="settingsButtonIcon" :color="primaryColor">mdi-cog</v-icon>
        <v-tooltip activator="parent" location="bottom">{{ translations.settings }}</v-tooltip>
      </v-btn>

      <SettingsComponent 
        v-if="showSettings"       
        @close="toggleShowSettings()"
        />

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          center-active
          show-arrows
          :style="{ color: lightenPrimaryColor }"
          :color="primaryColor"
          :bg-color="secondaryColor"
          :slider-color="primaryColor"
          align-tabs="center"
        >
          <v-tab
            v-for="item in items"
            :key="item"
            :value="item"
            @click="updateToolbarHeight"
          >
            {{ translations[item] }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-window v-model="tab">
      <v-window-item
        v-for="item in items"
        :key="item"
        :value="item"
      >
        <v-card flat>
          <component :is="getComponentForItem(item)"></component>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import { gsap } from 'gsap';
import { store } from './stores/store';

//Assets
import photoProfileImg from './assets/initiale.png';

//Components
import PhotoProfile from './components/PhotoProfile.vue';
import SettingsComponent from './components/modals/SettingsComponent.vue';
import AboutContainer from './components/about/AboutContainer.vue';
import SkillsContainer from './components/skills/SkillsContainer.vue';
import ProjectsContainer from './components/projects/ProjectsContainer.vue';
import ContactsContainer from './components/contacts/ContactsContainer.vue';
import {getLightenColor } from './services/colorService';

  export default {
    components: {
      'photo-profile': PhotoProfile,
      'SettingsComponent': SettingsComponent,
      'AboutContainer': AboutContainer,
      'SkillsContainer': SkillsContainer,
      'ProjectsContainer': ProjectsContainer,
      'ContactsContainer': ContactsContainer,
    },
    data () {
      return {
        fontFamilyBold: "'Nunito', sans-serif",
        showSettings: false,
        photoProfileImg: photoProfileImg,
        tab: null,
        items: [
          'about', 'skills', 'projects', 'contacts',
        ]
      }
    },
    computed: {
      translations() {
      return this.$i18n.messages[this.$i18n.locale].toolbar;
      },
      primaryColor() {
        return store.primaryColor;
      },
      secondaryColor() {
        return store.secondaryColor;
      },
      lightenPrimaryColor() {
        return getLightenColor(store.primaryColor, 80);
      }
    },
    mounted() {
      this.updateToolbarHeight();
      this.settingAnimations();
    },
    methods: {
      updateToolbarHeight() {
        this.$nextTick(() => {
          const toolbar = document.querySelector('.v-toolbar__content');
          const toolbarTitle = document.querySelector('.v-toolbar-title__placeholder');
          if (window.innerWidth <= 1024) {
            // Styles for mobile screens
            toolbar.style.height = '50px';
            toolbar.style.fontFamily = this.fontFamilyBold;
            toolbarTitle.style.width = '75vw';
            setTimeout(() => {
              toolbar.style.height = '50px';
            toolbar.style.fontFamily = this.fontFamilyBold;
            toolbarTitle.style.width = '75vw';
            }, 200);
          } else {
            toolbar.style.height = '80px';
            toolbar.style.fontFamily = this.fontFamilyBold;
            setTimeout(() => {
              toolbar.style.height = '80px';
              toolbar.style.fontFamily = this.fontFamilyBold;
            }, 200);
          }
        });
      },

      toggleShowSettings() {
        this.showSettings = !this.showSettings;
        this.updateToolbarHeight();
      },

      getComponentForItem(item) {
        switch (item) {
          case 'about': return 'AboutContainer';
          case 'skills': return 'SkillsContainer';
          case 'projects': return 'ProjectsContainer';
          case 'contacts': return 'ContactsContainer';
          default: return 'AboutContainer';
        }
      },

      //ANIMATIONS
      settingAnimations() {
        this.settingsButtonAnimation();
      },
      settingsButtonAnimation() {
        const settingsButton = this.$refs.settingsButtonIcon.$el;
        
        settingsButton.addEventListener('mouseenter', () => {
          gsap.to(settingsButton, {
            rotation: 280,
            scale: 1.5,
            ease: "bounce.out",
            duration: 1,
            transformOrigin: "34% 47%",
          });
        });
        settingsButton.addEventListener('mouseleave', () => {
          gsap.to(settingsButton, {
            rotation: -360,
            scale: 1,
            ease: "bounce.out",
            duration: 0.5,
          });
        });
      }
    }
  }
</script>

<style scoped lang="scss">
@import "./assets/variables.scss";

.profile-img{
  width: 4rem;
  height: 4rem;
  margin: 2.5rem 0.5rem 2rem 4rem;
}

.title-bold :nth-child(1) {
  font-weight: 700;
}

.v-toolbar-title{
  margin-top: 0.5rem;
  line-height: 4rem;
  font-size: 3.6rem;

  .v-toolbar-title__placeholder{
    margin-top: 2rem;
  }
}

.mdi-cog{
  margin-top: 0.5rem;
  padding-right: 1rem;
  font-size:3rem;

}

.v-tabs {
  width:100%;

  .v-tab{
    width: 12vw;
    padding: auto;
    margin: 0 1rem;
    font-size: 1.2rem;
    transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.02);
      }
  }
}

.v-card{
  box-shadow: none;
}

@media screen and (max-width: 1736px) {
  .v-tabs {
    .v-tab {
      width: 15vw;
      font-size: 1rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .profile-img{
    display:none;
  }

  .v-toolbar-title{
    margin-top: 0.5rem;
    font-size: 2rem;
  }

  .mdi-cog{
    margin-top: 0.5rem;
    padding-right: 0.5rem;
    font-size:2rem;

  }
  .v-tabs {
    .v-tab {
      width: 30vw;
      font-size: 0.7rem;
    }
  }
}


</style>
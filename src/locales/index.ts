import fr from './fr/index-fr.js';
import en from './en/index-en.js';
import franceFlag from '@/assets/images/flags/france.png';
import ukFlag from '@/assets/images/flags/uk.png';

export const defaultLocale = 'fr';

export const languages = {
  fr: fr,
  en: en
};

export const languageNames = {
  fr: { name: 'Français', flag: franceFlag },
  en: { name: 'English', flag: ukFlag },
};


export const appLocales = Object.keys(languages);

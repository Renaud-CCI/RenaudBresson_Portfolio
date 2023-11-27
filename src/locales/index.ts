import fr from './fr/index-fr.js';
import en from './en/index-en.js';

export const defaultLocale = 'fr';

export const languages = {
  fr: fr,
  en: en
};

export const appLocales = Object.keys(languages);

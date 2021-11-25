import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/en.json';
import translationDe from './locales/de.json';
import translationEs from './locales/es.json';
import translationFr from './locales/fr.json';
import translationZh from './locales/zh.json';

const LOCALE_EN = 'en';
const LOCALE_DE = 'de';
const LOCALE_ES = 'es';
const LOCALE_FR = 'fr';
const LOCALE_ZH = 'zh';

export const LOCALES = [LOCALE_EN, LOCALE_DE, LOCALE_ES, LOCALE_FR, LOCALE_ZH];

export const DEFAULT_LOCALE = LOCALE_EN;

const resources = {
  en: {
    translation: translationEn
  },
  de: {
    translation: translationDe
  },
  es: {
    translation: translationEs
  },
  fr: {
    translation: translationFr
  },
  zh: {
    translation: translationZh
  }
};

i18n.use(initReactI18next).init({
  lng: DEFAULT_LOCALE,
  fallbackLng: DEFAULT_LOCALE,
  interpolation: {
    escapeValue: false
  },
  resources
});

export const $t = (key: string, params = {}) => {
  return i18n.t(key, params);
};

export default i18n;

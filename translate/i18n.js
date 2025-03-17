import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './en/translation.json';
import translationTr from './tr/translation.json';

const resources = {
  en: {
    translation: translationEn,
  },
  tr: {
    translation: translationTr,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import engTranslation from '../src/Components/translations/translations.en.json';
import traduccion from '../src/Components/translations/translations.es.json';
import deutschTranslation from '../src/Components/translations/translations.de.json';
import frTranslation from '../src/Components/translations/translations.fr.json';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  es: {
    translation: traduccion,
  },
  en: {
    translation: engTranslation,
  },
  de: {
    translation: deutschTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

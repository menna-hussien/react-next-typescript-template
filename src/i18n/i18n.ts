import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import AR from './locales/ar.json';
import EN from './locales/en.json';

import { getItem } from '../utils/localStorage';

interface Language {
  code: string;
  name: string;
  dir: 'ltr' | 'rtl';
  country_code: string;
}

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    dir: 'ltr',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
];

async function initializeI18n(): Promise<void> {
  try {
    await i18n.use(initReactI18next).init({
      lng: getItem('code') ?? 'ar',
      fallbackLng: 'ar',
      interpolation: {
        escapeValue: false,
      },
      debug: false,
      resources: {
        en: {
          translation: EN,
        },
        ar: {
          translation: AR,
        },
      },
    });
    // console.log('i18n initialized successfully');
  } catch (err) {
    // console.error('i18n initialization error:', err);
    return;
  }
}

void initializeI18n();

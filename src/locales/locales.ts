import * as browserLanguage from 'in-browser-language';
import { addLocaleData } from 'react-intl';
import * as frLocaleData from 'react-intl/locale-data/fr';
import * as koLocaleData from 'react-intl/locale-data/ko';
import * as zhLocaleData from 'react-intl/locale-data/zh';

// Add locale data
addLocaleData([
  ...frLocaleData,
  ...koLocaleData,
  ...zhLocaleData,
]);

// Add translation data
export const messages = {
  en: {},
  fr: require('./lang/fr.json'),
  ko: require('./lang/ko.json'),
  zh: require('./lang/zh.json'),
};

export const locales = Object.keys(messages);
export const defaultLocale = browserLanguage.pick(locales, 'en');

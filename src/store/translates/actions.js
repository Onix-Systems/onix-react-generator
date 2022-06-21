import { TOGGLE_LOCALE, DELETE_LOCALE } from './types';
import i18n, { appLocales } from '../../i18n';

export const toggleLocale = (locale) => ({ type: TOGGLE_LOCALE, locale });

export const deleteLocale = (index) => ({ type: DELETE_LOCALE, index });

export const changeLanguage = () => {
  return (dispatch) => {
    const nextLocaleIndex = appLocales.indexOf(i18n.language) + 1;
    const locale = nextLocaleIndex >= appLocales.length ? appLocales[0] : appLocales[nextLocaleIndex];
    i18n.changeLanguage(locale);
    dispatch(toggleLocale(locale));
  };
};

import i18n from 'i18next';
import reducers, { initialState } from '../../../src/store/translates/reducers';
import { toggleLocale } from '../../../src/store/translates/actions';
import { resources } from '../../../src/i18n';

describe('translate reducer', () => {
  const localeText = i18n.language === 'ru-RU' ? 'ru' : 'en';
  test('should return initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  test('should handle toggle locale action', () => {
    expect(reducers(resources, toggleLocale(localeText)))
      .toEqual({ ...resources, locale: localeText });
  });
});

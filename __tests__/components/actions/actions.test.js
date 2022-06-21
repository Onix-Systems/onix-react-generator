import i18n from 'i18next';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { TOGGLE_LOCALE, DELETE_LOCALE } from '../../../src/store/translates/types';
import { toggleLocale, deleteLocale, changeLanguage } from '../../../src/store/translates/actions';

describe('actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({ locale: '' });

  test('should create an action to change language and call toggleLocale', () => {
    store.dispatch(changeLanguage());
    expect(store.getActions()[0]).toEqual({
      type: TOGGLE_LOCALE,
      locale: i18n.language
    });
  });

  test('should create an action to toggle locale', () => {
    const locale = 'ru';
    const expectedAction = {
      type: TOGGLE_LOCALE,
      locale
    };
    expect(toggleLocale(locale)).toEqual(expectedAction);
  });

  test('should create an action to delete locale', () => {
    const index = '1';
    const expectedAction = {
      type: DELETE_LOCALE,
      index
    };
    expect(deleteLocale(index)).toEqual(expectedAction);
  });
});

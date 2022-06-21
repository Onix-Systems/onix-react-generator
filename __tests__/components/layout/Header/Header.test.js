import React from 'react';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';
import { render } from '../../../settings/test-utils';
import Header from '../../../../src/layout/Header/Header';

describe('<Header />', () => {
  let wrapper;
  const mockText = 'mock text';
  beforeEach(() => {
    wrapper = render(
      <Header
        home={mockText}
        about={mockText}
        message={mockText}
      />
    );
  });

  test('should render Header component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('should toggle language', (done) => {
    const { getByTestId } = wrapper;
    const Button = getByTestId('toggle-language-button');
    expect(Button).toHaveTextContent(i18n.language);
    userEvent.click(Button);
    expect(Button).toHaveTextContent(i18n.language);
    done();
  });
});

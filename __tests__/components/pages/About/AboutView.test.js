import React from 'react';
import i18next from 'i18next';
import { render } from '../../../settings/test-utils';
import AboutView from '../../../../src/pages/About/AboutView';

describe('<AboutView />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<AboutView title={i18next.t('aboutPage')} />);
  });

  test('should render AboutView component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('AboutView component should have passed title', () => {
    const { getByText } = wrapper;
    expect(getByText(i18next.t('aboutPage'))).toBeInTheDocument();
  });
});

import React from 'react';
import userEvent from '@testing-library/user-event';
import i18next from 'i18next';
import { render } from '../../../settings/test-utils';
import HomeView from '../../../../src/pages/Home/HomeView';

describe('<HomeView />', () => {
  let wrapper;
  const mockInformation = 'mock information';
  const mockGetJoke = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <HomeView
        information={mockInformation}
        getJoke={mockGetJoke}
        title={i18next.t('homePage')}
        buttonTitle={i18next.t('newJoke')}
      />
    );
  });

  test('should render HomeView component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('should render Button component', () => {
    const { getByTestId } = wrapper;
    const Button = getByTestId('button');
    expect(Button).toBeInTheDocument();
  });

  test('on Button click should call mockGetJoke function', () => {
    const { getByTestId } = wrapper;
    const Button = getByTestId('button');
    userEvent.click(Button);
    expect(mockGetJoke).toHaveBeenCalled();
  });
});

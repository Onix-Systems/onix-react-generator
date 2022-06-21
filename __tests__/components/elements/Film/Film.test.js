import React from 'react';
import { render } from '../../../settings/test-utils';
import Film from '../../../../src/components/Film/Film';

describe('<Film />', () => {
  let wrapper;
  const mockFilm = {
    Title: 'mock film title',
    Poster: 'mock film poster'
  };

  beforeEach(() => {
    wrapper = render(<Film film={mockFilm} />);
  });
  test('should render Film component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('Film component should have file title', () => {
    const { getByText } = wrapper;
    expect(getByText(mockFilm.Title)).toBeInTheDocument();
  });
});

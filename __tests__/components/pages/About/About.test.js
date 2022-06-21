import React from 'react';
import { render } from '../../../settings/test-utils';
import About from '../../../../src/pages/About/About';

describe('About />', () => {
  test('should render About component', () => {
    const { asFragment } = render(<About />);
    expect(asFragment(<About />)).toMatchSnapshot();
  });
});

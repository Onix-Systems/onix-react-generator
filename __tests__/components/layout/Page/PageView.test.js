import React from 'react';
import { render } from '../../../settings/test-utils';
import PageView from '../../../../src/layout/Page/PageView';

describe('<PageView />', () => {
  let wrapper;
  const mockTitle = 'mock text';

  beforeEach(() => {
    wrapper = render(<PageView><h1>{mockTitle}</h1></PageView>);
  });

  test('should render PageView component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('PageView should contains children component', () => {
    const { getByText } = wrapper;
    expect(getByText(mockTitle)).toBeInTheDocument();
  });
});

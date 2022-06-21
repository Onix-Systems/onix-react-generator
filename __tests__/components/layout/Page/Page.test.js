import React from 'react';
import { render } from '../../../settings/test-utils';
import Page from '../../../../src/layout/Page/Page';
import PageView from '../../../../src/layout/Page/PageView';

describe('<Page />', () => {
  let wrapper;
  const mockTitle = 'mock text';

  beforeEach(() => {
    wrapper = render(
      <Page>
        <PageView>
          <h1>{mockTitle}</h1>
        </PageView>
      </Page>
    );
  });

  test('Page component should render', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('Page should contains children component', () => {
    const { getByText } = wrapper;
    expect(getByText(mockTitle)).toBeInTheDocument();
  });
});

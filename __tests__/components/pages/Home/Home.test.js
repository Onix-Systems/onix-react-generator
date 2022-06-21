import React from 'react';
import fetchMock from 'jest-fetch-mock';
import { render } from '../../../settings/test-utils';
import HomePage from '../../../../src/pages/Home/Home';

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    fetchMock.mockResponseOnce(JSON.stringify('mock data'));
    fetchMock.mockRejectOnce(JSON.stringify('mock error'));
    wrapper = render(<HomePage />);
  });

  test('should render Home component', (done) => {
    const { asFragment } = wrapper;
    expect(asFragment(<HomePage />)).toMatchSnapshot();
    done();
  });

  test('should call componentDidMount', (done) => {
    const mockComponentDidMount = jest.spyOn(HomePage.WrappedComponent.prototype, 'componentDidMount');
    render(<HomePage />);
    expect(mockComponentDidMount).toHaveBeenCalledTimes(1);
    done();
  });
});

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../settings/test-utils';
import Button from '../../../../src/components/Button/Button';

describe('<Button />', () => {
  let wrapper;
  const mockButtonClass = 'mock button class';
  const mockHandleClick = jest.fn();
  const mockButtonTitle = 'mock title';

  beforeEach(() => {
    wrapper = render(
      <Button
        title={mockButtonTitle}
        buttonClass={mockButtonClass}
        handleClick={mockHandleClick}
      />
    );
  });
  test('should render Button component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(wrapper)).toMatchSnapshot();
  });

  test('should call handleClick function on click', () => {
    const { getByText } = wrapper;
    const button = getByText(mockButtonTitle);
    userEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalled();
  });
});

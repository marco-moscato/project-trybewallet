import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Wallet from '../../pages/Wallet';
import { renderWithRouterAndRedux } from './renderWith';

describe('', () => {
  describe('Test functionalities of Wallet Form', () => {
    test('Test if is rendered an e-mail and password input', () => {
      renderWithRouterAndRedux(<Wallet />);

      const value = screen.getByTestId('value-input');
      const description = screen.getByTestId('description-input');
      const currency = screen.getByTestId('currency-input');
      const method = screen.getByTestId('method-input');
      const tag = screen.getByTestId('tag-input');
      const button = screen.getByRole('button', { name: /despesa/i });

      expect(value).toBeDefined();
      expect(description).toBeDefined();
      expect(currency).toBeDefined();
      expect(method).toBeDefined();
      expect(tag).toBeDefined();
      expect(button).toBeDefined();

      userEvent.type(value, '11');
      userEvent.type(description, 'restaurante');
      userEvent.click(button);
    });

    // test('checkboxes (and radios) must use click', () => {
    //   const handleChange = jest.fn();
    //   const { container } = render(<input type="checkbox" onChange={ handleChange } />);
    //   const checkbox = container.firstChild;
    //   // for checkboxes, the event that's fired is the click event,
    //   // and that causes the change event handler to be called.
    //   // learn more: https://github.com/testing-library/react-testing-library/issues/156
    //   userEvent.click(checkbox);
    //   expect(handleChange).toHaveBeenCalledTimes(1);
    //   expect(checkbox.checked).toBe(true);
    // });
  });
});

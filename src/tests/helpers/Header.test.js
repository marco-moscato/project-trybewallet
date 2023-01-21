import { screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Wallet from '../../pages/Wallet';
import { renderWithRouterAndRedux } from './renderWith';

describe('', () => {
  describe('Test functionalities of Wallet page', () => {
    test('Test if is rendered an e-mail and password input', () => {
      renderWithRouterAndRedux(<Wallet />);

      const email = screen.getByTestId('email-field');
      const totalValue = screen.getByTestId('total-field');
      const currency = screen.getByTestId('header-currency-field');
      const value = screen.getByTestId('value-input');
      const button = screen.getByRole('button', /despesa/i);

      expect(value).toBeDefined();
      expect(email).toBeDefined();
      expect(totalValue).toBeDefined();
      expect(currency).toBeDefined();
      expect(button).toHaveProperty('type', 'button');

      // userEvent.type(value, '100');
      // userEvent.type(button);
      // expect(totalValue).not.toEqual('');
    });
  });
});
